import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Chart, registerables } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
Chart.register(...registerables);

const DoughnutChart = ({
  total,
  first,
  second,
  type,
  color,
  mode,
  x,
  y,
  fontS,
  cutoff,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: x ? x : "250px",
        height: y ? y : "250px",
        position: "relative",
        // [theme.breakpoints.down("md")]: {
        //   width: "90px",
        //   height: "90px",
        // },
      }}
    >
      <Doughnut
        data={{
          labels: [1, 2],
          datasets: [
            {
              label: "",
              data: [total - second, second],
              backgroundColor: [
                theme.palette.secondary[100],
                theme.palette.secondary[700],
              ],
              borderColor: "inherit",
              borderWidth: 0,
              cutout: cutoff ? cutoff : "60%",
            },
          ],
        }}
        height={y ? y : "10px"}
        width={x ? x : "10px"}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                display: false,
                gridLines: {},
                drawBorder: false,
              },

              ticks: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
                gridLines: {},
                drawBorder: false,
              },
              ticks: {
                display: false,
              },
            },
            yAxes: [
              {
                display: false,
                gridLines: {
                  display: false,
                  gridLines: {},

                  drawBorder: false, //<- set this
                },
                ticks: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                display: false,
                gridLines: {
                  display: false,
                  gridLines: {},
                  drawBorder: false, //<- set this
                },
                ticks: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
      <Typography
        fontSize={fontS ? fontS : 22}
        color={theme.palette.secondary[100]}
        sx={{
          direction: "rtl",
          position: "absolute",
          top: "42%",
          right: "35%",
          //   [theme.breakpoints.down("md")]: {
          //     fontSize: 10,
          //   },
        }}
      >
        {` ${total} دام`}
      </Typography>
    </Box>
  );
};

export default DoughnutChart;
