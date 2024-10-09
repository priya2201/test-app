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
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LogInPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  console.log(emailError, "emailerror", passwordError, "pe");
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
    setEmailError(null);
    setPasswordError(null);
    setErrorMessages([]);

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
        if (Array.isArray(data.errors)) {
          // const messages = data.errors.map((error: any) => {
          //   // Adjust according to your validation structure
          //   return (
          //     Object.values(error.constraints || {}).join(", ") ||
          //     "Validation error"
          //   );
          // });
          // setErrorMessages(messages);
          data.errors.forEach((error: any) => {
            if (error.property === "email") {
              if (error.constraints.isEmail) {
                setEmailError(error.constraints.isEmail);
              }
              if (error.constraints.isNotEmpty) {
                setEmailError(error.constraints.isNotEmpty);
              }
            }
            if (error.property === "password") {
              if (error.constraints.isLength) {
                setPasswordError(error.constraints.isLength);
              }
              if (error.constraints.isNotEmpty) {
                setPasswordError(error.constraints.isNotEmpty);
              }
            }
          });
        } else {
          setErrorMessages([data.message || "An error occurred"]);
          console.error(data.message);
          setOpenSnackbar(true);
        }
        // setOpenSnackbar(true); // Open Snackbar to show errors
        return;
      }
      console.log(data, data.signature);
      localStorage.setItem("token", data.signature);
      console.log(localStorage.getItem("token"), "Token ");
      if (rememberMe) {
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
      console.log(localStorage.getItem("token"), "Token Before Routing");

      router.push("/home");
    } catch (error: any) {
      if (error instanceof Error) {
        setErrorMessages([error.message]);
      } else {
        setErrorMessages(["An unknown error occurred"]);
      }
      // localStorage.removeItem("token");
      setOpenSnackbar(true);
      console.error("Error", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqHqYTzLXGJrBB-dkzoPPwL9qE9qz4LmvnQ&s")', // Your background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          // filter: "blur(8px)", // Adjust blur intensity as needed
          zIndex: 0, // Behind the content
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            // minwidth: "30%",
            // maxWidth: "70%",

            flexDirection: "column",
            padding: 4,
            // backgroundColor: "#f5f5f5",
            borderRadius: 5,
            boxShadow: 2,
            width: "35%",
            margin: "0 auto",
            height: "auto",
            position: "relative", // Ensure this is on top of the background
            backgroundColor: "rgba(245, 245, 245, 0.8)", // Semi-transparent background for better text readability
            zIndex: 1, // On top of the background

            // position: "relative", // Ensure relative positioning for the ::before pseudo-element
            // overflow: "hidden", // Ensure child elements don't overflow
            // background: "transparent", // Set background to transparent
            // "&::before": {
            //   content: '""',
            //   position: "absolute",
            //   top: 0,
            //   left: 0,
            //   right: 0,
            //   bottom: 0,
            //   backgroundImage:
            //     'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqHqYTzLXGJrBB-dkzoPPwL9qE9qz4LmvnQ&s")', // Your background image URL
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   filter: "blur(8px)", // Adjust blur intensity as needed
            //   zIndex: -1, // Position behind the content
            // },
          }}
          component="form"
          onSubmit={fetching}
        >
          <Typography
            variant="h4"
            component="h2"
            color="secondary"
            gutterBottom
          >
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
              margin="normal"
              fullWidth
              error={!!emailError}
            />{" "}
            {emailError && <FormHelperText error>{emailError}</FormHelperText>}
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              margin="normal"
              fullWidth
              error={!!passwordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />{" "}
            {passwordError && (
              <FormHelperText error>{passwordError}</FormHelperText>
            )}
            <FormControlLabel
              sx={{ color: "black" }}
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
              Don't Have an Account?{" "}
              <Link href="/signup">Visit Signup page</Link>
            </Typography>
          </Box>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={errorMessages.join(", ")}
          />
        </Container>
      </div>
    </>
  );
}
