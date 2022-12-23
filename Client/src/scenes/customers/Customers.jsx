import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { useGetCustomersQuery } from "States/api";
import Header from "components/header/Header";
import { DataGrid } from "@mui/x-data-grid";
import ProgressBar from "components/progressbar/ProgressBar";
import DoughnutChart from "components/doughnutChart/DoughnutChart";
import Indicator from "components/indicator/Indicator";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log("🚀 ~ file: Customers.jsx:9 ~ Customers ~ data", data);
  const columns = [
    { field: "_id", headerName: "کد دام", width: 100 },
    { field: "name", headerName: "وضعیت", width: 100 },
    { field: "email", headerName: "بهاربند", width: 130 },
    // {
    //   field: "phoneNumber",
    //   headerName: "Phone Number",
    //   flex: 0.5,
    //   renderCell: (params) => {
    //     return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2=$3");
    //   },
    // },
    { field: "country", headerName: "سن", width: 100 },
    {
      field: "occupation",
      headerName: "روزهای فحلی",
      width: 200,

      renderCell: (params) => {
        return (
          <Box width={"100px"}>
            <Indicator
              completed={63}
              direction={"h"}
              w={"1.5rem"}
              h={"18rem"}
            />
          </Box>
        );
      },
    },
    { field: "role", headerName: "شاخص فحلی", width: 100 },
  ];
  const columns1 = [
    { field: "_id", headerName: "کد دام", width: 80 },
    { field: "name", headerName: "وضعیت", width: 80 },
    { field: "email", headerName: "مرتبه شیرواری", width: 100 },

    { field: "country", headerName: "سن / روزهای شیرواری", width: 150 },
    {
      field: "occupation",
      headerName: "شاخص سلامت",
      width: 200,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              backgroundColor: "#DB3A00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>80</Typography>
          </Box>
        );
      },
    },
    { field: "role", headerName: "علت", width: 100 },
  ];
  const FarmStatistics = () => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    return (
      <Card
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.alt,
          borderRadius: "0.55rem",
          width: "49%",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color={theme.palette.secondary[500]}
            mb="2rem"
          >
            آمار مزرعه
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography>تعداد ماده ها</Typography>
                <Typography>134</Typography>
              </Box>
              <Box
                sx={{
                  width: "68%",
                  height: "30px",
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: "50px",
                  mr: "1.6rem",
                  // position: "relative",
                }}
              >
                <ProgressBar
                  bgcolor={theme.palette.secondary[600]}
                  completed={44}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "15%",
                  mr: "1.2rem",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    borderRight: `2px solid ${theme.palette.primary.light}`,
                    ml: "1rem",
                  }}
                >
                  <Typography mr={1}> 41%</Typography>
                </Box>
                <Box
                  sx={{
                    borderRight: `2px solid ${theme.palette.primary.light}`,
                  }}
                >
                  <Typography mr={1}> 54 تلیسه</Typography>
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
                }}
              >
                <Typography>دام های بالغ</Typography>
                <Typography>77</Typography>
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
                      completed={44}
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
                      <Typography mr={1}> 99%</Typography>
                      <Typography mr={1}> 1%</Typography>
                    </Box>
                    <Box
                      sx={{
                        borderRight: `2px solid ${theme.palette.primary.light}`,
                      }}
                    >
                      <Typography mr={1}>76 دوشا</Typography>
                      <Typography mr={1}>1 خشک</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{ width: "100%", display: "flex", alignItems: "center" }}
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
                      completed={44}
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
                      <Typography mr={1}> 45%</Typography>
                      <Typography mr={1}> 0%</Typography>
                    </Box>
                    <Box
                      sx={{
                        borderRight: `2px solid ${theme.palette.primary.light}`,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography mr={1}>35 آبستن</Typography>
                      <Typography mr={1}>0 تلقیح نشود</Typography>
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
                }}
              >
                <Typography>تعداد تلیسه ها</Typography>
                <Typography>54</Typography>
              </Box>
              <Box
                sx={{
                  width: "68%",
                  height: "30px",
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: "50px",
                  mr: "1.6rem",
                  // position: "relative",
                }}
              >
                <ProgressBar
                  bgcolor={theme.palette.secondary[600]}
                  completed={44}
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
                  <Typography mr={1}> 0%</Typography>
                </Box>
                <Box
                  sx={{
                    borderRight: `2px solid ${theme.palette.primary.light}`,
                  }}
                >
                  <Typography mr={1}>0 تلیسه آبستن</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  };

  const ChartPanel = () => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    return (
      <Card
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.alt,
          borderRadius: "0.55rem",
          width: "49%",
          paddingTop: "1.1rem",
          paddingBottom: "0.8rem",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
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
              <DoughnutChart
                total={460}
                first={260}
                second={200}
                color={"#3D8361"}
              />
              <Box display={"flex"} alignItems="center" width={"13rem"}>
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
                <Typography fontSize={"1.1rem"}>با تگ 260</Typography>
              </Box>
              <Box display={"flex"} alignItems="center" width={"13rem"}>
                <Box
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    backgroundColor: theme.palette.secondary[600],
                    borderRadius: "50%",
                    ml: "3rem",
                    mr: "1rem",
                  }}
                ></Box>
                <Typography fontSize={"1.1rem"}>بدون تگ 200</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" mb={"2rem"}>
                نگهداری سیستم
              </Typography>
              <Box
                sx={{
                  width: "15rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "1rem",
                }}
              >
                <Typography fontSize={"1.1rem"}>
                  تعداد تگ های نیازمند نصب :
                </Typography>
                <Typography fontSize={"1.1rem"}>23</Typography>
              </Box>
              <Box
                sx={{
                  width: "15rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontSize={"1.1rem"}>
                  تعداد تگ های نیازمند تعویض :
                </Typography>
                <Typography fontSize={"1.1rem"}>4</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  };
  function DataGridTitle() {
    return (
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color={theme.palette.secondary[500]}>
          دام های فحل | 4 راس
        </Typography>
      </Box>
    );
  }

  function DataGridTitle1() {
    return (
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color={theme.palette.secondary[500]}>
          دام های نیازمند مراقبت | 10 راس
        </Typography>
      </Box>
    );
  }
  return (
    <Box m="1.5rem  2.5rem">
      {/* <Header title={"پنل مدیریت"} subTitle={""} /> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          mt="40px"
          mb="2rem"
          height="40vh"
          width="49%"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
              fontSize: 14,
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.primary.light,
              fontSize: 14,
              "&::-webkit-scrollbar": {
                width: 12,
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.1)`,
                borderRadius: "5px",
              },
              "&::-webkit-scrollbar-button": {
                height: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "darkgrey",
                outline: `1px solid slategrey`,
                borderRadius: "5px",
                height: "50px",
              },
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
              // direction: "ltr",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: ` ${theme.palette.secondary[200]} !important`,
            },
            "& .MuiTablePagination-toolbar": {
              direction: "ltr",
            },
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data || []}
            columns={columns}
            components={{ Toolbar: DataGridTitle }}
          />
        </Box>
        <Box
          mt="10px"
          height="40vh"
          width="49%"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
              fontSize: 14,
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.primary.light,
              fontSize: 14,
              "&::-webkit-scrollbar": {
                width: 12,
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.1)`,
                borderRadius: "5px",
              },
              "&::-webkit-scrollbar-button": {
                height: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "darkgrey",
                outline: `1px solid slategrey`,
                borderRadius: "5px",
                height: "50px",
              },
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
              // direction: "ltr",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: ` ${theme.palette.secondary[200]} !important`,
            },
            "& .MuiTablePagination-toolbar": {
              direction: "ltr",
            },
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data || []}
            columns={columns1}
            components={{ Toolbar: DataGridTitle1 }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FarmStatistics />
        <ChartPanel />
      </Box>
    </Box>
  );
};
export default Customers;
