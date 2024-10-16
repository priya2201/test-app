import { Box } from "@mui/material";
import React from "react";

function box() {
  return (
    <div>
      <Box
        sx={{
          minHeight: "20px",
          minWeight: "100%",
          border: "1px solid black",
        }}
      >
        Header Box
      </Box>
      {/* <br /> */}
      &nbsp; &nbsp;
      <Box
        sx={{
          minHeight: "1020px",
          minWeight: "100%",
          border: "2px solid black",
        }}
      >
        Content Box
      </Box>
    </div>
  );
}

export default box;
