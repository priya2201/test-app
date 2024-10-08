"use client";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/user/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <>
      <Button
        variant="outlined"
        color="error"
        onClick={handleLogout}
        sx={{ marginTop: 2, padding: 1.5, fontSize: 16, alignSelf: "flex-end" }}
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
          Next.js is frontend framework which comes with multiple features for
          building large-scale applications <br />
          React.js is a frontend library used to develop component based UI{" "}
          <br />
          Material UI is a component library which makes life of React js
          developer easier <br />
        </Typography>
      </Box>
    </>
  );
}
