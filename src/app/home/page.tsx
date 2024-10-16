"use client";
import { Box, Typography, Button, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Logout() {
  const router = useRouter();
  const [errorMessages, setErrorMessages] = useState<string | null>(null); // Store error messages
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/user/logout", {
        method: "POST",
        // credentials:'include'
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setOpenSnackbar(true);
        setTimeout(() => {
          localStorage.removeItem("token");
          router.push("/login");
        }, 2000);
      } else {
        setErrorMessages(data.message || "An unknown error occurred");
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error("Error logging out:", error);
      setErrorMessages("An unexpected error occurred");
      setOpenSnackbar(true);
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
            'url("https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-72289.jpg")', // Your background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        <Button
          variant="outlined"
          color="error"
          onClick={handleLogout}
          sx={{
            marginTop: 2,
            padding: 1.5,
            fontSize: 16,
            alignSelf: "flex-end",
          }}
        >
          Logout
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100lvh",
          }}
        >
          <Typography sx={{ textAlign: "center", color: "black" }}>
            Welcome on Home Page
          </Typography>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={errorMessages || message}
        />
      </div>
    </>
  );
}


