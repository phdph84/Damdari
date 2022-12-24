import { Box, Grid, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ChartPanel from "components/chartPanel/ChartPanel";
import DamFasl from "components/damFasl/DamFasl";
import DamMoraghebat from "components/damMoraghebat/DamMoraghebat";
import FarmStatistics from "components/farmStatistics/FarmStatistics";
import Header from "components/header/Header";
import Indicator from "components/indicator/Indicator";
import React from "react";
import { useGetCustomersQuery } from "States/api";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid
        container
        sx={{
          width: "100%",
          height: "40vh",
          display: "flex",
          justifyContent: "space-evenly",
          mt: "0.5rem",
          mb: "2.5rem",
        }}
      >
        <Grid
          item
          sx={{
            backgroundColor: theme.palette.background.alt,
            width: "49%",
            height: "45vh",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header title={"دام های فحل"} />
          <DamFasl />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: theme.palette.background.alt,
            width: "25%",
            height: "45vh",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ChartPanel />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: theme.palette.background.alt,
            width: "23.2%",
            height: "45vh",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        ></Grid>
      </Grid>
      <Grid
        container
        sx={{
          width: "100%",
          height: "40vh",
          display: "flex",
          justifyContent: "space-evenly",
          mt: "0.5rem",
          mb: "1rem",
        }}
      >
        <Grid
          item
          sx={{
            backgroundColor: theme.palette.background.alt,
            width: "49%",
            height: "45vh",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header title={"آمار مزرعه"} />

          <FarmStatistics />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: theme.palette.background.alt,
            width: "49%",
            height: "45vh",
            borderRadius: "20px",
          }}
        >
          <Header title={"دام های نیازمند مراقبت"} />
          <DamMoraghebat />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
