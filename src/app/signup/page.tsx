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
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import InputMask from "react-input-mask";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    phone: "",
    address: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmpasswordError, setconfirmPasswordError] = useState<
    string | null
  >(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  console.log(errorMessages, "em");
  const fetching = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);
    setPasswordError(null);
    setconfirmPasswordError(null);
    setPhoneError(null);
    setErrorMessages([]);
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
        // if (data.errors) {
        //   // Assuming 'data.errors' is an array of error messages
        //   const messages = data.errors.map((error: any) => {
        //     // Adjust according to your validation structure
        //     return (
        //       Object.values(error.constraints || {}).join(", ") ||
        //       "Validation error"
        //     );
        //   });
        //   setErrorMessages(messages);

        //2  error handling

        if (Array.isArray(data.errors)) {
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
            if (error.property === "phone") {
              if (error.constraints.isLength) {
                setPhoneError(error.constraints.isLength);
              }
              if (error.constraints.isNotEmpty) {
                setPhoneError(error.constraints.isNotEmpty);
              }
            }
            if (error.property === "confirmPassword") {
              if (error.constraints.isLength) {
                setconfirmPasswordError(error.constraints.isLength);
              }
              if (error.constraints.isNotEmpty) {
                setconfirmPasswordError(error.constraints.isNotEmpty);
              }
            }
          });
        } else {
          setErrorMessages([data.message || "An error occurred"]);
          setOpenSnackbar(true);
        }
        return;
      }

      router.push("/loginValidation");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) value = value.slice(0, 10);

    const formattedPhone = value.replace(/(\d{3})(\d{3})(\d{0,4})/, "$1-$2-$3");

    setUser({ ...user, phone: formattedPhone });
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        minHeight: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "auto",
          minHeight: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqHqYTzLXGJrBB-dkzoPPwL9qE9qz4LmvnQ&s")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // Behind the content
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            flexDirection: "column",
            padding: 4,
            borderRadius: 5,
            boxShadow: 2,
            width: "35%",
            margib: "0 auto",
            height: "auto",
            position: "relative",
            backgroundColor: "rgba(245,245,245,0.8)",
            zIndex: 1,
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
              margin="normal"
              fullWidth
              error={!!emailError}
            />
            {emailError && <FormHelperText error>{emailError}</FormHelperText>}
            {/* <InputMask
          mask="999-99-9999"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        >
          {() => (
          <TextField
            label="Phone Number"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!phoneError}
          />
          )}
          </InputMask> */}
            <TextField
              label="Phone Number"
              variant="outlined"
              value={user.phone}
              onChange={handlePhoneChange}
              margin="normal"
              fullWidth
              error={!!phoneError}
              inputProps={{ maxLength: 12 }}
            />

            {phoneError && <FormHelperText error>{phoneError}</FormHelperText>}
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              fullWidth
              margin="normal"
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
            />
            {/* <IconButton
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          sx={{ position: "absolute", right: 0, top: 0 }}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton> */}
            {passwordError && (
              <FormHelperText error>{passwordError}</FormHelperText>
            )}
            <TextField
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              margin="normal"
              fullWidth
              error={!!confirmpasswordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* <IconButton
          onClick={() => {
            setShowConfirmPassword(!setShowConfirmPassword);
          }}
          sx={{ position: "absolute", right: 0, top: 0 }}
        >
          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton> */}
            {confirmpasswordError && (
              <FormHelperText error>{confirmpasswordError}</FormHelperText>
            )}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginTop: 2, padding: 1.5, fontSize: 16 }}
            >
              Sign up
            </Button>
            <Typography sx={{ marginTop: 2, color: "black" }}>
              Already have an account?{" "}
              <Link href="/login">Visit login page</Link>
            </Typography>
          </Box>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={errorMessages.join(", ")} // Join all error messages
          />
        </Container>
      </div>
    </div>
  );
}

//expres
// call back use
// local storage
// authentication:
// access token
// refresh token
// axios interepter
// usestate
// useeffect
// vercel
// nodemailer
//react hook form
