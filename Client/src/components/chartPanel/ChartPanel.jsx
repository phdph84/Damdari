import { Box, Divider, Typography, useTheme } from "@mui/material";
import DoughnutChart from "components/doughnutChart/DoughnutChart";
import React, { useState } from "react";

const ChartPanel = () => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DoughnutChart total={460} first={260} second={200} color={"#3D8361"} />
        <Box display={"flex"} alignItems="center" width={"10rem"}>
          <Box
            sx={{
              width: "1rem",
              height: "1rem",
              backgroundColor: theme.palette.secondary[100],
              borderRadius: "50%",
              ml: "3rem",
              mr: "1rem",
            }}
          ></Box>
          <Typography fontSize={"0.7rem"}>با تگ 260</Typography>
        </Box>
        <Box display={"flex"} alignItems="center" width={"10rem"}>
          <Box
            sx={{
              width: "1rem",
              height: "1rem",
              backgroundColor: theme.palette.secondary[600],
              borderRadius: "50%",
              ml: "3rem",
              mr: "1rem",
              mt: "0.2rem",
            }}
          ></Box>
          <Typography fontSize={"0.7rem"}>بدون تگ 200</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" mb={"2rem"} fontSize={"1rem"}>
          نگهداری سیستم
        </Typography>
        <Box
          sx={{
            width: "10rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "1rem",
          }}
        >
          <Typography fontSize={"0.7rem"}>
            تعداد تگ های نیازمند نصب :
          </Typography>
          <Typography fontSize={"0.7rem"}>23</Typography>
        </Box>
        <Box
          sx={{
            width: "10rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontSize={"0.7rem"}>
            تعداد تگ های نیازمند تعویض :
          </Typography>
          <Typography fontSize={"0.7rem"}>4</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChartPanel;
