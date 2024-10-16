"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Select,
  TextField,
  Typography,
  useTheme,
  InputLabel,
  MenuItem,
  RadioGroup,
  FormLabel,
  Radio,
  Card,
  styled,
} from "@mui/material";
import { useState } from "react";
import DogLicenseStepper from "../dogLicenseForm/DogLicenseStepper";
import { useRouter } from "next/navigation";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function AddressForm() {
  const router = useRouter();
  const handleDogStartApplication = () => {
    router.push("/dogLicenseForm");
  };
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const firstStepperSteps = [
    "Step 1: Owner Info",
    "Step 2: Dog Details",
    "Step 3: Additional Info",
  ];
  const secondStepperSteps = [
    "Step 4: Review & Preview",
    "Step 5: Confirmation",
  ];

  const theme = useTheme();
  const [currentStep, setCurrentStep] = useState(1);
  const isInFirstStepper = currentStep <= 3;

  const styless = {
    "&.MuiButtonBase-root": {
      backgroundColor: "#2196F3",
      color: "white",
    },
  };
  const blackHeader = {
    "&.MuiFormLabel-root": {
      color: "black",
    },
  };

  const styless1 = {
    "&.MuiButtonBase-root": {
      backgroundColor: "#9C27B0",
      color: "white",
    },
  };
  const breedSpecialities = [
    "German Shepherd",
    "Bulldog",
    "French Bulldog",
    "Siberian Husky",
  ];
  const colors = ["Black", "Brown", "white"];
  const vetClinics = ["Chembur", "Noida", "Delhi", "Mumbai"];
  const [formData, setFormData] = useState({
    //formData 1
    ownerName: "",
    address: "",
    // aptSuiteFloor: '',
    zipCode: "",
    telephone: "",
    email: "",
    isPOBox: false,

    //second form data
    dogName: "",
    breed: "",
    primaryColor: "",
    mixBreed: false,
    secondaryColor: false,
    sex: "Male",
    dogSpayedOrNeuterd: "No",
    dogOrAServiceDog: "Yes",
    vaccinationDate: "",
    vaccinationEndDate: "",
    vetClinic: "",
    addAnotherDog: "",
    //third form
    over70Years: "No",
    uploadFile: null,
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      // Update the form data with the uploaded file
      setFormData({
        ...formData,
        uploadFile: file,
      });
      setErrors((prevErrors) => ({
        ...prevErrors,
        uploadFile: "", // Clear any existing errors for the upload field
      }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement & {
      value: unknown;
    }; // Type casting for input elements
    setFormData({
      ...formData,
      [name || ""]: type === "checkbox" ? checked : value, // Handling both checkbox and select/input types
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.preventDefault());
    console.log(formData, "form");
    const newErrors: { [key: string]: string } = {}; // or use 'Record<string, string>'
    if (currentStep === 1) {
      if (!formData.ownerName) {
        newErrors.ownerName = "Dog owner name is required.";
      }
      if (!formData.address) {
        newErrors.address = "Address is required.";
      }
      if (!formData.zipCode) {
        newErrors.zipCode = "Zip code is required.";
      }
      const phoneRegex = /^\d{10}$/; // Regex for exactly 10 digits
      if (!formData.telephone) {
        newErrors.telephone = "Telephone is required.";
      } else if (!phoneRegex.test(formData.telephone)) {
        newErrors.telephone = "Telephone must be exactly 10 digits.";
      }

      if (!formData.email) {
        newErrors.email = "Email is required.";
      }
    } else if (currentStep === 2) {
      if (!formData.dogName) {
        newErrors.dogName = "Dog name is required.";
      }
      if (!formData.breed) {
        newErrors.breed = "Breed is required.";
      }
      if (!formData.vaccinationDate) {
        newErrors.vaccinationDate = "vaccination Date is required.";
      }
      if (!formData.primaryColor) {
        newErrors.primaryColor = "Primary Color is required.";
      }
      if (!formData.vetClinic) {
        newErrors.vaccinationEndDate = "Vet Clinic is required.";
      }
    } else if (currentStep === 3) {
      if (!formData.uploadFile) {
        newErrors.vaccinationEndDate = "Uploaded File is required.";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors state
      return; // Prevent form submission
    }
    console.log(newErrors, "new error");

    handleNextStep();
  };
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  // const handleSpecialityChange = (event: ChangeEvent<{ value: unknown }>) => {
  //   setProductSpeciality(event.target.value as string);
  // };

  return (
    <>
      <Box
        sx={{
          minHeight: "40px",
          minWeight: "100%",
          padding: { xs: "10px", sm: "20px" },
          borderBottom: "1px solid #ccc",
          marginBottom: "20px",
        }}
      >
        <DogLicenseStepper activeStep={currentStep < 4 ? 1 : 2} />
      </Box>
      {/* <Grid
        container
        justifyContent="flex-end"
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        <Grid item sm={4}>
          <Card
            sx={{
              backgroundColor: "#E0F7FA",
              padding: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              License fee total
            </Typography>
            <Typography variant="h4" sx={{ color: "#007FFF", marginTop: 1 }}>
              $15.00
            </Typography>
          </Card>
        </Grid>
      </Grid> */}
      <Box
        sx={{
          padding: 4,
          maxWidth: "800px",
          margin: "0 auto",
          [theme.breakpoints.down("sm")]: {
            // Mobile styles
            padding: 2,
            maxWidth: "100%",
          },
        }}
      >
        {currentStep === 1 && (
          <>
            {" "}
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 300,
                fontSize: "48px",
                lineHeight: "57.6px",
                letterSpacing: "-0.5%",
                color: "#343741",
                [theme.breakpoints.down("sm")]: {
                  // Mobile styles
                  fontSize: "24px",
                  width: "auto",
                  padding: 2,
                  maxWidth: "100%",
                  top: "104px",
                  letterSpacing: "-0.5%",
                  color: "#343741",
                  lineHeight: "32px",
                  fontWeight: 300,
                  left: "12px",
                  height: "auto",
                },
              }}
            >
              What is your address?
            </Typography>
            <Typography color="#2196F3">Step 1 of 3: Your info</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} sx={{ color: "black" }}>
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

                <Grid item xs={12} sm={9}>
                  <Typography color="#2196F3">
                    Add Apt #, Suite, Floor (optional)
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={3}>
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

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    fullWidth
                    type="tel"
                    error={!!errors.telephone}
                    helperText={errors.telephone}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
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
                <Grid item xs={7}></Grid>

                <Grid item xs={12} sm={5}>
                  <FormControlLabel
                    sx={{ color: "black" }}
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

                <Grid item sm={6} xs={12}></Grid>
                <Grid item xs={6} sm={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ ...styless1 }}
                    onClick={handleDogStartApplication}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ ...styless }}
                    // onClick={handleNextStep}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </form>
          </>
        )}
        {currentStep === 2 && (
          <>
            {" "}
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 300,
                fontSize: "48px",
                lineHeight: "57.6px",
                letterSpacing: "-0.5%",
                color: "#343741",
                [theme.breakpoints.down("sm")]: {
                  // Mobile styles
                  fontSize: "24px",
                  width: "auto",
                  padding: 2,
                  maxWidth: "100%",
                  top: "104px",
                  letterSpacing: "-0.5%",
                  color: "#343741",
                  lineHeight: "32px",
                  fontWeight: 300,
                  left: "12px",
                  height: "auto",
                },
              }}
            >
              Please enter the dog details:
            </Typography>
            <Typography color="#2196F3">Step 2 of 3: Your info</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Dog name"
                    name="dogName"
                    value={formData.dogName}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.dogName}
                    helperText={errors.dogName}
                  />
                </Grid>

                <Grid item xs={12} sm={9}>
                  <FormControl fullWidth error={!!errors.breed}>
                    <InputLabel>Breed</InputLabel>
                    <Select
                      label="Breed"
                      name="breed"
                      value={formData.breed || ""}
                      // onChange={(e) => {
                      //   setFormData({
                      //     ...formData,
                      //     breed: e.target.value,
                      //   });
                      //   setErrors((prevErrors) => ({
                      //     ...prevErrors,
                      //     breed: "",
                      //   }));
                      // }}
                      onChange={handleChange}
                      fullWidth
                    >
                      {breedSpecialities.map((speciality) => (
                        <MenuItem key={speciality} value={speciality}>
                          {speciality}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.breed && (
                      <Typography variant="caption" color="error">
                        {errors.breed}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <FormControlLabel
                    sx={{ color: "black" }}
                    control={
                      <Checkbox
                        name="mixBreed"
                        checked={formData.mixBreed}
                        onChange={handleChange}
                      />
                    }
                    label="Mixed Breed"
                  />
                </Grid>

                <Grid item xs={12} sm={5}>
                  <FormControl fullWidth>
                    <InputLabel>Primary Color</InputLabel>
                    <Select
                      label="Primary Color"
                      name="primaryColor"
                      value={formData.primaryColor}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryColor: e.target.value,
                        })
                      }
                      fullWidth
                    >
                      {colors.map((speciality) => (
                        <MenuItem key={speciality} value={speciality}>
                          {speciality}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={7}>
                  <FormControlLabel
                    sx={{ color: "black" }}
                    control={
                      <Checkbox
                        name="secondaryColor"
                        checked={formData.secondaryColor}
                        onChange={handleChange}
                      />
                    }
                    label="Does your dog have a secondary color?"
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Box display="flex" alignItems="center">
                    <FormLabel sx={{ ...blackHeader, marginRight: 2 }}>
                      What sex is your dog?
                    </FormLabel>
                    <RadioGroup
                      value={formData.sex}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sex: e.target.value, // Update the 'sex' field in formData
                        })
                      }
                      row
                    >
                      <FormControlLabel
                        sx={{ ...blackHeader, marginRight: 2 }}
                        value="Male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        sx={{ color: "black" }}
                        value="Female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Box display="flex" alignItems="center">
                    <FormLabel sx={{ marginRight: 2 }}>
                      Is your dog spayed or neutered?
                    </FormLabel>
                    <RadioGroup
                      value={formData.dogSpayedOrNeuterd}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dogSpayedOrNeuterd: e.target.value, // Update the 'sex' field in formData
                        })
                      }
                      row
                    >
                      <FormControlLabel
                        sx={{ color: "black" }}
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        sx={{ color: "black" }}
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box display="flex" alignItems="center">
                    <FormLabel sx={{ ...blackHeader, marginRight: 2 }}>
                      Is this dog a service dog?{" "}
                    </FormLabel>
                    <RadioGroup
                      value={formData.dogOrAServiceDog}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dogOrAServiceDog: e.target.value, // Update the 'sex' field in formData
                        })
                      }
                      row
                    >
                      <FormControlLabel
                        sx={{ color: "black" }}
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        sx={{ color: "black" }}
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="Vaccination date"
                    type="date"
                    value={formData.vaccinationDate}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        vaccinationDate: e.target.value,
                      });
                    }}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="Vaccination end date"
                    type="date"
                    value={formData.vaccinationEndDate}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        vaccinationEndDate: e.target.value,
                      });
                    }}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={9}>
                  <FormControl fullWidth>
                    <InputLabel>Vet Clinic</InputLabel>
                    <Select
                      label="Vet Clinic"
                      name="vetClinic"
                      value={formData.vetClinic}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          vetClinic: e.target.value,
                        })
                      }
                      fullWidth
                    >
                      {vetClinics.map((speciality) => (
                        <MenuItem key={speciality} value={speciality}>
                          {speciality}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={6} xs={12}></Grid>
                <Grid item xs={6} sm={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ ...styless1 }}
                    onClick={handlePrevStep}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ ...styless }}
                    // onClick={handleNextStep}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </form>
          </>
        )}
        {currentStep === 3 && (
          <>
            {" "}
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 300,
                fontSize: "48px",
                lineHeight: "57.6px",
                letterSpacing: "-0.5%",
                color: "#343741",
                [theme.breakpoints.down("sm")]: {
                  // Mobile styles
                  fontSize: "24px",
                  width: "auto",
                  padding: 2,
                  maxWidth: "100%",
                  top: "104px",
                  letterSpacing: "-0.5%",
                  color: "#343741",
                  lineHeight: "32px",
                  fontWeight: 300,
                  left: "12px",
                  height: "auto",
                },
              }}
            >
              Final Details:
            </Typography>
            <Typography color="#2196F3">Step 3 of 3: Your info</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Box display="flex" alignItems="center">
                    <FormLabel sx={{ ...blackHeader, marginRight: 2 }}>
                      Are you over 70 years of age?
                    </FormLabel>
                    <RadioGroup
                      value={formData.over70Years}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          over70Years: e.target.value, // Update the 'sex' field in formData
                        })
                      }
                      row
                    >
                      <FormControlLabel
                        sx={{ color: "black" }}
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        sx={{ color: "black" }}
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <FormLabel sx={{ ...blackHeader, marginRight: 2 }}>
                    Please upload your current dog’s rabies certificate. If you
                    do not have it, you will be asked to upload it before a
                    license can be issued.
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload
                      <VisuallyHiddenInput
                        type="file"
                        onChange={(event) => handleFileChange(event)}
                        accept=".pdf,.jpeg,.jpg,.png" // Accept common file types
                      />
                    </Button>
                  </FormLabel>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <FormLabel sx={{ ...blackHeader, marginRight: 2 }}>
                    If you would like to pay by check, please send to address,
                    otherwise hit “Next” to proceed to online payment
                  </FormLabel>
                </Grid>
                <Grid item sm={6} xs={12}></Grid>
                <Grid item xs={6} sm={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ ...styless1 }}
                    onClick={handlePrevStep}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ ...styless }}
                    // onClick={handleNextStep}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </form>
          </>
        )}
        {currentStep === 4 && (
          <>
            {" "}
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 300,
                fontSize: "48px",
                lineHeight: "57.6px",
                letterSpacing: "-0.5%",
                color: "#343741",
                [theme.breakpoints.down("sm")]: {
                  // Mobile styles
                  fontSize: "24px",
                  width: "auto",
                  padding: 2,
                  maxWidth: "100%",
                  top: "104px",
                  letterSpacing: "-0.5%",
                  color: "#343741",
                  lineHeight: "32px",
                  fontWeight: 300,
                  left: "12px",
                  height: "auto",
                },
              }}
            >
              Preview Form:
            </Typography>
            <Typography color="#2196F3">
              Step 4 of 3:Review Your Details
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Box>
                  <Typography variant="h6">Dog Owner Info</Typography>
                  <Typography>Name: {formData.ownerName}</Typography>
                  <Typography>Address: {formData.address}</Typography>
                  <Typography>Zip Code: {formData.zipCode}</Typography>
                  <Typography>Telephone: {formData.telephone}</Typography>
                  <Typography>Email: {formData.email}</Typography>
                  {/* Add more fields as necessary */}
                </Box>
                <Grid item xs={6} sm={3}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handlePrevStep} // Navigate back to previous steps
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit} // Final submit button
                  >
                    Submit
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



//git status
//git add .
//git commit -m ""
//git push origin priya
//chnage branch to develop
//review-aavesh
