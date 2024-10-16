"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const theme = useTheme();

  const styless = {
    "&.MuiButtonBase-root": {
      backgroundColor: "#2196F3",
      color: "white",
    },
  };
  const router = useRouter();
  const handleStartApplication = () => {
    router.push("/dogLicenseForm");
  };
  return (
    <Container maxWidth="lg" sx={{ paddingTop: { xs: 2, sm: 4 } }}>
      <Box
        sx={{
          // minHeight: "40px",
          // minWeight: "100%",
          // padding: { xs: "10px", sm: "20px" },
          borderBottom: "1px solid #ccc",
          marginBottom: { xs: 4, sm: 6 },
          paddingBottom: { xs: 4, sm: 6 },
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            mb: 4,
            fontSize: { xs: "1.5rem", sm: "2rem" },
            color: "#000000",
          }}
        >
          Welcome to Hopkinton Online Dog Licensing
        </Typography>
      </Box>
      <Box
        sx={{
          width: "1232px",
          height: "868px",
          top: "114px",
          left: "24px",
          borderRadius: "4px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            // width: "600px",
            // height: "58px",
            // top: "164px",
            // left: "128px",
            color: "#343741",
            justifyContent: "flex-start",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            // textAlign: { xs: "center", md: "flex-start" },
            marginBottom: 4,
          }}
        >
          Choose your Next Action:
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} sm={6}>
            <Card
              sx={{
                // boxShadow: 3,
                // borderRadius: 3,
                textAlign: "center",
                // padding: 2,
                width: "300px",
                height: "576px",
                top: "304px",
                left: "129px",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                {/* <PetsIcon sx={{ fontSize: 60, mb: 2, color: "#2196F3" }} /> */}
                <Box
                  component="img"
                  src="https://s3-alpha-sig.figma.com/img/97f3/679f/dab3d8130d15893561d629c1e4b4d5c8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=brjKE9CwkRPm-RV3JiNRUhsrHWQgKdr9ojmL9ddazv-QFPunnZ6h4utasKdo3ufJ2NXAEA~cDfSAN1xK~Yl9ntp80o7njV5IGxlzd9qeF7NrYzLPPo5rol6M0c3d85i-Q6uRjJNcxTdsJG~XXn0wPvQ8e0rgtBhrMv63fyIlNpwKSp7CB5Om7IUThIJEZR4e0R9~DA33F~7AtRvEB33XVEuWFfvcfogYoTNFT49SpcWbe9gq1LGd2K66EYtB5vWEMlwElUdEwEOA6bEvaX6Bds7KaLGmnkPH2vPyPNEXtMmr41XpVFrBxghUOaDlPkbErarrYbN7DR2e5jJTVYY3dw__"
                  alt="dog"
                  sx={{
                    width: "230px",
                    height: "230px",
                    top: "337px",
                    left: "164px",
                    borderRadius: "50%",
                    mb: 2,
                    backgroundColor: "#FFF2AC",
                    objectFit: "cover",
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "25.6px",
                    color: "black",
                    width: "218px",
                    height: "103px",
                    top: "592px",
                    left: "192px",
                  }}
                >
                  If you are looking to start a new application for either a dog
                  license, or a kennel license, start here.
                </Typography>
                <Button
                  variant="contained"
                  // sx={{ backgroundColor: "#2196F3", color: "#ffffff" }}
                  onClick={handleStartApplication}
                  sx={{
                    ...styless,
                    lineHeight: "12.6px",
                    fontWeight: "20px",
                    fontSize: "12px",
                    width: "183px",
                    top: "110px",
                    [theme.breakpoints.down("sm")]: {
                      // Mobile styles
                      fontSize: "20px",
                      width: "206px",
                      // top: "7415px",
                      fonSize: "20px",
                      fontWeight: 500,
                      lineHeight: "25.6px",
                    },
                  }}
                >
                  Start a new application
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sm={6}>
            <Card
              sx={{
                // boxShadow: 3,
                // borderRadius: 3,
                textAlign: "center",
                // padding: 2,
                width: "300px",
                height: "576px",
                top: "304px",
                left: "492px",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Box
                  component="img"
                  src="https://s3-alpha-sig.figma.com/img/96cc/a57a/0ee214f144f59bb06ceb7236b3daadee?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gTy-916TYKbNpoZMYIgTaJjPXmFRME16wO4PkErMTfEyiF20pD4jA1MjMTruVP0QVpjuJchLR94BUA0vsdGtjfwU4~4ondwkRETPgYrklD~HORWV36EnM8pkxG7f0D-kbdGfTUXxk9qtQeGi3CZrqmrfEsL9DcaImPwQReYED9Cg~mYM1hq7bE5dgwawiRoBfIHNJSkQs~Ld5CZxI0LcMoHWaccsAVF71TXAIQzmYf7tZqKGxSCNa3M4mhxMTNjvD4Ixqc3LDjeE0CizAgsvvVNK~enNTa9~sFgt2sHZC~2gw2pg-Bz137zdyZLr6cPd9NfBRg-wgnvIwcWlFEnv9g__"
                  alt="paw"
                  sx={{
                    width: "230px",
                    height: "230px",
                    top: "337px",
                    left: "164px",
                    borderRadius: "50%",
                    mb: 2,
                    backgroundColor: "#FFF2AC",
                    // objectFit: "cover",
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "25.6px",
                    color: "black",
                    width: "218px",
                    height: "103px",
                    top: "592px",
                    left: "192px",
                  }}
                >
                  If you already have an existing dog license, or kennel
                  license, and would like to renew it, or add another dog to an
                  existing license, start here
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    ...styless,
                    lineHeight: "12.6px",
                    fontWeight: "20px",
                    fontSize: "12px",
                    width: "183px",
                    top: "110px",
                    [theme.breakpoints.down("sm")]: {
                      // Mobile styles
                      fontSize: "20px",
                      width: "206px",
                      // top: "7415px",
                      fonSize: "20px",
                      fontWeight: 500,
                      lineHeight: "25.6px",
                    },
                  }}
                  //   onClick={handleRenewLicense}
                >
                  Renew or add
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Card
              sx={{
                // boxShadow: 3,
                // borderRadius: 3,
                textAlign: "center",
                // padding: 2,
                width: "300px",
                height: "576px",
                top: "304px",
                left: "855px",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Box
                  component="img"
                  src="https://s3-alpha-sig.figma.com/img/a4c2/b93f/5c93d9fc853bc45988d96c38a9de3c61?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RyESvy6V26-iVVDMYnQMrt4YGacXmJb7cBQe16gPvZEXT62OuVOOHt13Su8bMaWcn-LOP9gSFVvVqxa4n0H41X~Df2PyxddxlFyd11nbwaEUKxXoeRL2s-r7b0fIrl1zy7TbR4x8pEKpgWfBsikAxcQo2erTGNHgfP20EpjMCUQAw1swVwvqDD01LEBQ~XeQzbBtXt-uJSbH1WdGug5MAG0s0JMQlStImH0~SHWQa5tXrDZYicJhkgYS9WF~U5PhVk2adlKIkqMNMhRBfX9OYpqtl-zhjawz73F5YrkwEWBP6vLn4doXo6llcZESIeusaoSPPTpCgXTzhE-5XA4w-w__"
                  alt="check"
                  sx={{
                    width: "230px",
                    height: "230px",
                    top: "337px",
                    left: "164px",
                    borderRadius: "50%",
                    mb: 2,
                    backgroundColor: "#FFF2AC",
                    objectFit: "cover",
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "25.6px",
                    color: "black",
                    width: "218px",
                    height: "103px",
                    top: "592px",
                    left: "192px",
                  }}
                >
                  If you have already submitted a dog license, or kennel
                  license, application and would like to check the status, start
                  here.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    ...styless,
                    lineHeight: "12.6px",
                    fontWeight: "20px",
                    fontSize: "12px",
                    width: "183px",
                    top: "110px",
                    [theme.breakpoints.down("sm")]: {
                      // Mobile styles
                      fontSize: "20px",
                      width: "206px",
                      // top: "7415px",
                      fonSize: "20px",
                      fontWeight: 500,
                      lineHeight: "25.6px",
                    },
                  }}
                  // sx={{
                  // //   width: "151px",
                  // //   height: "26px",
                  // //   top: "797px",
                  // //   left: "929px",
                  //   backgroundColor: "#2196F3",
                  // }}

                  //   onClick={handleRenewLicense}
                >
                  Check the status
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
