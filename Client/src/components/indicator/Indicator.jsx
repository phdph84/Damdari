import { Box, Typography } from "@mui/material";
import React from "react";

const Indicator = (props) => {
  const { completed, direction, w, h } = props;

  return (
    <Box
      sx={{
        height: h ? h : "80px",
        width: w ? w : 15,

        background:
          "linear-gradient(to top, rgba(231,255,148,1) 10%, rgba(160,251,83,1) 15%, rgba(57,180,7,1) 53%, rgba(180,152,7,1) 66%, rgba(180,102,7,1) 85%, rgba(180,44,7,1) 91%)",

        // borderRadius: 50,
        margin: 0,
        position: "relative",
        rotate: direction === "h" ? "270deg" : "0deg",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          //   height: `${completed}%`,
          height: "5px",
          width: "120%",
          right: "-1.5px",
          bottom: `${(completed / 9) * 8}%`,
          backgroundColor: "white",
          border: "1px solid #333",
          //   borderRadius: "inherit",
          textAlign: "center",
          transition: "width 1s ease-in-out",
        }}
      >
        <Typography
          sx={{
            padding: 0,
            color: "white",
            fontWeight: "bold",
          }}
        >{``}</Typography>
      </Box>
    </Box>
  );
};

export default Indicator;
