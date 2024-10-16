import React from "react";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";

interface DogLicenseStepperProps {
  activeStep: number;
}
function DogLicenseStepper({activeStep}:DogLicenseStepperProps) {
  const steps = ["Application", "Your Info", "Payment"];

  
  return (
    <>
      <Typography
        component="h3"
        sx={{
          textAlign: "center",
          color: "black",
          lineHeight: "43.2px",
          fontWeight: "300px",
          fontSize: { xs: "18px", sm: "24px" },
        }}
      >
        Welcome To Hopkinton Online Dog Licensing
      </Typography>
      <Stepper activeStep={activeStep} sx={{marginBottom:'20px'}}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
}

export default DogLicenseStepper;
