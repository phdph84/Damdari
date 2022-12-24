import { Box, Divider, Typography, useTheme } from "@mui/material";
import ProgressBar from "components/progressbar/ProgressBar";
import React from "react";

const FarmStatistics = () => {
  const theme = useTheme();

  return (
    <Box
      mt="30px"
      mb="2rem"
      height="100%"
      width="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            mr: "1rem",
            width: "10%",
          }}
        >
          <Typography fontSize={"0.7rem"}>تعداد ماده ها</Typography>
          <Typography fontSize={"0.7rem"}>134</Typography>
        </Box>
        <Box
          sx={{
            width: "65%",
            height: "30px",
            backgroundColor: theme.palette.primary.light,
            borderRadius: "50px",
            mr: "1.5rem",
            // position: "relative",
          }}
        >
          <ProgressBar bgcolor={theme.palette.secondary[600]} completed={41} />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "15%",
            mr: "1rem",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              borderRight: `2px solid ${theme.palette.primary.light}`,
              ml: "1rem",
            }}
          >
            <Typography mr={1} fontSize={"0.5rem"}>
              41%
            </Typography>
          </Box>
          <Box
            sx={{
              borderRight: `2px solid ${theme.palette.primary.light}`,
            }}
          >
            <Typography mr={1} fontSize={"0.5rem"}>
              54 تلیسه
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: "1rem", mb: "1rem" }} />

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            mr: "1rem",
            width: "10%",
          }}
        >
          <Typography fontSize={"0.7rem"}>دام های بالغ</Typography>
          <Typography fontSize={"0.7rem"}>77</Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              mb: "2rem",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "73%",
                height: "30px",
                backgroundColor: theme.palette.primary.light,
                borderRadius: "50px",
                mr: "2rem",
                // position: "relative",
              }}
            >
              <ProgressBar
                bgcolor={theme.palette.secondary[600]}
                completed={99}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "20%",
                mr: "1rem",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  borderRight: `2px solid ${theme.palette.primary.light}`,
                  ml: "1rem",
                }}
              >
                <Typography mr={1} fontSize={"0.5rem"}>
                  {" "}
                  99%
                </Typography>
                <Typography mr={1} fontSize={"0.5rem"}>
                  {" "}
                  1%
                </Typography>
              </Box>
              <Box
                sx={{
                  borderRight: `2px solid ${theme.palette.primary.light}`,
                }}
              >
                <Typography mr={1} fontSize={"0.5rem"}>
                  76 دوشا
                </Typography>
                <Typography mr={1} fontSize={"0.5rem"}>
                  1 خشک
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "73%",
                height: "30px",
                backgroundColor: theme.palette.primary.light,
                borderRadius: "50px",
                mr: "2rem",
                // position: "relative",
              }}
            >
              <ProgressBar
                bgcolor={theme.palette.secondary[600]}
                completed={45}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "20%",
                mr: "1rem",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  borderRight: `2px solid ${theme.palette.primary.light}`,
                  display: "flex",
                  flexDirection: "column",
                  ml: "1rem",
                }}
              >
                <Typography mr={1} fontSize={"0.5rem"}>
                  {" "}
                  45%
                </Typography>
                <Typography mr={1} fontSize={"0.5rem"}>
                  {" "}
                  0%
                </Typography>
              </Box>
              <Box
                sx={{
                  borderRight: `2px solid ${theme.palette.primary.light}`,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography mr={1} fontSize={"0.5rem"}>
                  35 آبستن
                </Typography>
                <Typography mr={1} fontSize={"0.5rem"}>
                  0 تلقیح نشود
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: "1rem", mb: "1rem" }} />

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            mr: "1rem",
            width: "10%",
          }}
        >
          <Typography fontSize={"0.7rem"}>تعداد تلیسه ها</Typography>
          <Typography fontSize={"0.7rem"}>54</Typography>
        </Box>
        <Box
          sx={{
            width: "65%",
            height: "30px",
            backgroundColor: theme.palette.primary.light,
            borderRadius: "50px",
            mr: "1.4rem",
            // position: "relative",
          }}
        >
          <ProgressBar bgcolor={theme.palette.secondary[600]} completed={0} />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "15%",
            mr: "1rem",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              borderRight: `2px solid ${theme.palette.primary.light}`,
              ml: "1rem",
            }}
          >
            <Typography mr={1} fontSize={"0.5rem"}>
              {" "}
              0%
            </Typography>
          </Box>
          <Box
            sx={{
              borderRight: `2px solid ${theme.palette.primary.light}`,
            }}
          >
            <Typography mr={1} fontSize={"0.5rem"}>
              0 تلیسه آبستن
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FarmStatistics;
