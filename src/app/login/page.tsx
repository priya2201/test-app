"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
export default function LogInPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      setUser({ email: savedEmail, password: savedPassword });
      setRememberMe(true);
    }
  }, []);
  const fetching = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": " application/json",
        },
        body: JSON.stringify({ ...user, rememberMe }),
      });
      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const messages = data.errors.map((error: any) => {
            // Adjust according to your validation structure
            return (
              Object.values(error.constraints || {}).join(", ") ||
              "Validation error"
            );
          });
          setErrorMessages(messages);
        } else {
          setErrorMessages([data.message || "An error occurred"]);
        }
        setOpenSnackbar(true); // Open Snackbar to show errors
        return;
      }
      console.log(data, data.signature);
      localStorage.setItem("token", data.signature);
      if (rememberMe) {
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
      router.push("/home");
    } catch (error: any) {
      if (error instanceof Error) {
        setErrorMessages([error.message]);
      } else {
        setErrorMessages(["An unknown error occurred"]);
      }
      localStorage.removeItem("token");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
          padding: 4,
          backgroundColor: "#f5f5f5",
          borderRadius: 8,
          boxShadow: 3,
        }}
        component="form"
        onSubmit={fetching}
      >
        <Typography variant="h4" component="h2" color="secondary" gutterBottom>
          Log In
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%", // Ensure full width of the Box
            maxWidth: 400, // Limit maximum width for better readability
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
            margin="normal"
            fullWidth
          />{" "}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
            margin="normal"
            fullWidth
          />{" "}
          <FormControlLabel sx={{color:'black'}}
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="Remember Me"
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: 2, padding: 1.5, fontSize: 16 }}
          >
            Log In
          </Button>
          <Typography sx={{ marginTop: 2, color: "black" }}>
            Don't Have an Account? <Link href="/signup">Visit Signup page</Link>
          </Typography>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={errorMessages.join(", ")}
        />
      </Container>
    </>
  );
}
