// AboutYouForm.tsx
import { TextField, Box, Typography } from "@mui/material";

 export const AboutYouForm = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField label="First Name" variant="outlined" />
      <TextField label="Last Name" variant="outlined" />
      <TextField label="Email" variant="outlined" />
    </Box>
  );
};


// StartDateForm.tsx

 export const StartDateForm = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Start Date"
        type="date"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
      />
    </Box>
  );
};


// ReviewForm.tsx

export const ReviewForm = () => {
  return (
    <Box>
      <Typography variant="h6">Review your data before submitting</Typography>
      {/* Display the entered data from previous forms here */}
    </Box>
  );
};

