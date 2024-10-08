"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
} from "@mui/material";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    phone: "",
    address: "",
    firstName: "",
    lastName: "",
  });

  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const fetching = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors
        if (data.errors) {
          // Assuming 'data.errors' is an array of error messages
          const messages = data.errors.map((error: any) => {
            // Adjust according to your validation structure
            return (
              Object.values(error.constraints || {}).join(", ") ||
              "Validation error"
            );
          });
          setErrorMessages(messages);
        } else {
          // Handle non-validation errors (e.g., email already exists)
          setErrorMessages([data.message || "An error occurred"]);
        }
        setOpenSnackbar(true); // Open Snackbar to show errors
        return;
      }

      // Redirect on successful signup
      router.push("/login");
    } catch (error) {
      console.error(error);
      
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
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
        Sign Up
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: 400,
        }}
      >
        {/* User input fields */}
        <TextField
          label="First Name"
          variant="outlined"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Address"
          variant="outlined"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
          margin="normal"
          rows={4}
          multiline
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
          margin="normal"
          fullWidth
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          required
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2, padding: 1.5, fontSize: 16 }}
        >
          Sign up
        </Button>
        <Typography sx={{ marginTop: 2, color: "black" }}>
          Already have an account? <Link href="/login">Visit login page</Link>
        </Typography>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={errorMessages.join(", ")} // Join all error messages
      />
    </Container>
  );
}
