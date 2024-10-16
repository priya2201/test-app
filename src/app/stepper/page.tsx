// "use client";
// import { Visibility } from "@mui/icons-material";
// import {
//   Box,
//   Button,
//   Step,
//   StepButton,
//   Stepper,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";

// // const steps = [
// //   "Select Campaign settings",
// //   "Create an ad group",
// //   "create an ad",
// // ];
// const steps = ["About You", "Start Date", "Review"];
// const styless = {
//   padding: 2,
//   backgroundColor: "rgba(0, 0, 0, 0.1)",
//   boxShadow: 2,
//   "& .Mui-active": {
//     "&.MuiStepIcon-root": {
//       color: "warning.main",
//       fontSize: "2rem",
//     },
//     "& .MuiStepConnector-line": {
//       borderColor: "warning.main",
//     },
//   },
//   "& .Mui-completed": {
//     "&.MuiStepIcon-root": {
//       color: "secondary.main",
//       fontSize: "2rem",
//     },
//     "& .MuiStepConnector-line": {
//       borderColor: "secondary.main",
//     },
//   },
// };

// export default function HorizontalNonLineearStepper() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});

//   const totalSteps = () => {
//     return steps.length;
//   };
//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };
//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };
//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };
//   const handleNext = () => {
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? steps.findIndex((step, i) => !(i in completed))
//         : activeStep + 1;
//     setActiveStep(newActiveStep);
//   };

//   const handleBack = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   const handleStep = (step: number) => () => {
//     setActiveStep(step);
//   };

//   const handleComplete = () => {
//     setCompleted({
//       ...completed,
//       [activeStep]: true,
//     });
//     handleNext();
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };
//   return (
//     <Box sx={{ width: "100%" }}>
//       <Stepper nonLinear activeStep={activeStep} sx={styless}>
//         {steps.map((label, index) => (
//           <Step key={label} completed={completed[index]}>
//             {/* <StepButton color="inherit" onClick={handleStep(index)}>
//               {label}
//                 </StepButton> */}
//             {index < 2 ? (
//               <StepButton color="inherit" onClick={handleStep(index)}>
//                 {label}
//               </StepButton>
//             ) : (
//               <StepButton
//                             onClick={handleStep(index)}
//                             icon={<Visibility />}
//                             sx={
//                                 activeStep === 2 ? {
//                                     '& .MuiSvgIcon-root': {
//                                         color: 'warning.main', fontSize: '2rem'
//                                     }
//                                 } : allStepsCompleted() ? {
//                                     '& .MuiSvgIcon-root': {
//                                         color: 'secondary.main',
//                                         fontSize: '2rem'
//                                     }
//                                 } : {
//                                     "& .MuiSvgIcon-root": {
//                                         color: 'rgba(0,0,0,0.38)'
//                                     }
//                                 }}
//               >
//                 {label}
//               </StepButton>
//             )}
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {allStepsCompleted() ? (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Box sx={{ flex: "1 1 auto" }} />
//               <Button onClick={handleReset}>Reset</Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: " 1 1 autp" }}>
//                 <Button onClick={handleNext} sx={{ mr: 1 }}>
//                   Next
//                 </Button>
//                 {activeStep !== steps.length &&
//                   (completed[activeStep] ? (
//                     <Typography
//                       variant="caption"
//                       sx={{ display: "inline-block" }}
//                     >
//                       Step {activeStep + 1} already completed
//                     </Typography>
//                   ) : (
//                     <Button onClick={handleComplete}>
//                       {completedSteps() === totalSteps() - 1
//                         ? "Finish"
//                         : "Complete Step"}
//                     </Button>
//                   ))}
//               </Box>
//             </Box>
//           </React.Fragment>
//         )}
//       </div>
//     </Box>
//   );
// }

"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import {AboutYouForm} from "./AboutYouForm";
import {ReviewForm} from './AboutYouForm'
import {StartDateForm} from './AboutYouForm'

const steps = ["About You", "Start Date", "Review"];

const styless = {
  padding: 2,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  boxShadow: 2,
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "warning.main",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "warning.main",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "secondary.main",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "secondary.main",
    },
  },
};

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});//completed{0:true,1:false}

  const totalSteps = () => steps.length; //3
  const completedSteps = () => Object.keys(completed).length; 
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({ ...completed, [activeStep]: true });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  // Render the form based on the active step
  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <AboutYouForm />;
      case 1:
        return <StartDateForm />;
      case 2:
        return <ReviewForm />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep} sx={styless}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* Render the current form */}
            <Box sx={{ mt: 2 }}>{renderForm()}</Box>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>

              {activeStep !== steps.length && !completed[activeStep] && (
                <Button onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1
                    ? "Finish"
                    : "Complete Step"}
                </Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
