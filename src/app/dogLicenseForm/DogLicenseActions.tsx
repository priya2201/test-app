'use client';
import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";

function DogLicenseActions() {
  const router = useRouter();

  const onNewDogApplication = () => {
    router.push("/newDogApplication");
  };
  const onActionClick = (actionType: string) => {
    // Handle navigation based on the actionType
    if (actionType === "newDog") {
      router.push("/newDogApplication");
    } else if (actionType === "newKennel") {
      router.push("/newKennelApplication");
    }
  };

  const styless = {
    "&.MuiButtonBase-root": {
      backgroundColor: "#2196F3",
      color: "white",
    },
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid
        item
        //   xs={12} md={4} sm={6}
      >
        <Card
          sx={{
            //   margin: 2, width: 300
            width: "300px",
            // top: "327px",
            height: "400px",
            // left: "324px",
            boxShadow: 8,
            borderRadius: "5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: 120, // Set the diameter of the circle
                height: 120,
                backgroundColor: "#FFF2AC", // Set the background color for the circle
                borderRadius: "50%", // Make the box a circle
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto", // Center the circle horizontally
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/97f3/679f/dab3d8130d15893561d629c1e4b4d5c8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=brjKE9CwkRPm-RV3JiNRUhsrHWQgKdr9ojmL9ddazv-QFPunnZ6h4utasKdo3ufJ2NXAEA~cDfSAN1xK~Yl9ntp80o7njV5IGxlzd9qeF7NrYzLPPo5rol6M0c3d85i-Q6uRjJNcxTdsJG~XXn0wPvQ8e0rgtBhrMv63fyIlNpwKSp7CB5Om7IUThIJEZR4e0R9~DA33F~7AtRvEB33XVEuWFfvcfogYoTNFT49SpcWbe9gq1LGd2K66EYtB5vWEMlwElUdEwEOA6bEvaX6Bds7KaLGmnkPH2vPyPNEXtMmr41XpVFrBxghUOaDlPkbErarrYbN7DR2e5jJTVYY3dw__"
                alt="dog"
                style={{ width: "70%", height: "70%" }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "#000000",
                lineHeight: "25.6px",
                fontWeight: 400,
                fontSize: "16px",
                width: "218px",
                top: "615px",
                height: "77px",
                left: "380px",
              }}
            >
              If you are looking to start a new application for a dog license
              start here.
            </Typography>
            <Button
              variant="contained"
              onClick={()=>onActionClick('newDog')}
              sx={{
                ...styless,
                lineHeight: "25.6px",
                fontWeight: "18,px",
                fontSize: "12px", // Responsive text size
                width: "183px",
                top: "110px",
              }}
            >
              New dog application
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <Card
          sx={{
            //   margin: 2, width: 300
            width: "300px",
            // top: "327px",
            height: "400px",
            // left: "324px",
            boxShadow: 8,
            borderRadius: "5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: 120, // Set the diameter of the circle
                height: 120,
                backgroundColor: "#FFF2AC", // Set the background color for the circle
                borderRadius: "50%", // Make the box a circle
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto", // Center the circle horizontally
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/336f/0a8d/d7931dec1ff85445938cda56d8912535?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ocxJInAyRhVUnim1rGs7nq9Zz-1HX5vu7oIoDjCm4TVTFt0zWO9Z~JY0htx4UXZheTCv~a~vkPdBFe8mjLGGVTDR0CjT36jOgmh-ljUOkH6xCSUI89NM8TaiJ5D8IdbZlifhuriY-SthrL83UOprSPCGP6QouqbRSTULDxXopRZqqj4LaizxMJ5~gKRcqQ2eb2TznbQiCj4vnZGOqEPQ9-3fMy8Kok4m9-p6YlS5CvBNGr9o4sz6tfl38rkY1MWS1-uDmXqDQLuDYwrtVowDu7Hj7dtsFhMgeCbFwwKKuCOOVfqy8ROs-lecb8ktQ-Gg-psiHhk9UMUVhXZxIiKIKw__"
                alt="kennel"
                style={{ width: "70%", height: "70%" }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#000000",
                lineHeight: "25.6px",
                fontWeight: 400,
                fontSize: "16px",
                width: "218px",
                top: "615px",
                height: "77px",
                left: "750px",
              }}
            >
              If you are looking to start a new application for a dog kennel
              license start here.
            </Typography>
            <Button
              variant="contained"
              onClick={()=>onActionClick('newkennel')}

              sx={{
                ...styless,
                lineHeight: "12.6px",
                fontWeight: "18px",
                fontSize: "12px",
                width: "183px",
                top: "110px",
              }}
            >
              New kennel application
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default DogLicenseActions;
