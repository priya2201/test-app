import React from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DogLicenseStepper from "./DogLicenseStepper";
import DogLicenseActions from "./DogLicenseActions";

function DogLicenseForm() {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Box
        sx={{
          minHeight: "40px",
          minWeight: "100%",
          padding: { xs: "10px", sm: "20px" },
          borderBottom: "1px solid #ccc",
          marginBottom: "20px",
        }}
      >
        <DogLicenseStepper activeStep={0} />
      </Box>
      <br />
      <Box textAlign="center" sx={{ marginBottom: "20px" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#343741",
            // lineHeight: "57.6px",
            fontWeight: "300px",
            fontSize: { xs: "18px", sm: "24px" },
            // letterSpacing: "-0.5%",
            width: "600px",
            top: "186px",
            height: "116px",
            left: "234px",
          }}
        >
          Thanks! Let’s start your new application. Choose the type:
        </Typography>
      </Box>
      <DogLicenseActions />
    </Container>
  );
}

export default DogLicenseForm;
