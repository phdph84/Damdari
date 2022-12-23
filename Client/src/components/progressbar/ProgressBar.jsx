import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: 30,
        width: "100%",
        // backgroundColor: theme.palette.background.light,
        borderRadius: 50,
        margin: 0,
        direction: "rtl",
        [theme.breakpoints.down("md")]: {
          height: 30,
          width: "120px",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: `${completed}%`,
          backgroundColor: bgcolor,
          borderRadius: "inherit",
          textAlign: "center",
          transition: "width 1s ease-in-out",
        }}
      ></Box>
    </Box>
  );
};

export default ProgressBar;
