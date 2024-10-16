"use client";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  useTheme,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import DogLicenseStepper from "../dogLicenseForm/DogLicenseStepper";
import { useRouter } from "next/navigation";

export default function AddressForm() {
  const router = useRouter();
  const theme = useTheme();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    ownerName: "",
    address: "",
    zipCode: "",
    telephone: "",
    email: "",
    isPOBox: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Validation logic
    const newErrors: { [key: string]: string } = {};
    if (!formData.ownerName)
      newErrors.ownerName = "Dog owner name is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.zipCode) newErrors.zipCode = "Zip code is required.";
    if (!formData.telephone) newErrors.telephone = "Telephone is required.";
    if (!formData.email) newErrors.email = "Email is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors state
      return; // Prevent form submission
    }

    // If no errors, proceed to next step
    handleNextStep();
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <Box sx={{ padding: 4, maxWidth: "800px", margin: "0 auto" }}>
        {currentStep === 1 && (
          <>
            <DogLicenseStepper activeStep={1} />
            <Typography variant="h4" gutterBottom>
              What is your address?
            </Typography>
            <Typography color="#2196F3">Step 1 of 3: Your info</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Dog owner name"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.ownerName}
                    helperText={errors.ownerName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.address}
                    helperText={errors.address}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Zip code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.zipCode}
                    helperText={errors.zipCode}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.telephone}
                    helperText={errors.telephone}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="isPOBox"
                        checked={formData.isPOBox}
                        onChange={handleChange}
                      />
                    }
                    label="Is this a PO Box?"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => router.push("/dogLicenseForm")} // Navigation button
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button type="submit" variant="contained" fullWidth>
                    Next
                  </Button>
                </Grid>
              </Grid>
            </form>
          </>
        )}
      </Box>
    </>
  );
}
