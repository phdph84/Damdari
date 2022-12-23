import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h5"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px", mt: "1rem", mr: "1rem" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary[300]}
        sx={{ mb: "5px" }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
