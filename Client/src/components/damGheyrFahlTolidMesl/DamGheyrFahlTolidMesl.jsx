import { KeyboardArrowDownOutlined, PrintOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Indicator from "components/indicator/Indicator";
import React from "react";
import { useGetCustomersQuery } from "States/api";

const columns = [
  { field: "_id", headerName: "کد دام", width: 120 },
  { field: "email", headerName: "بهاربند", width: 140 },
  { field: "name", headerName: "وضعیت شیرواری", width: 140 },
  { field: "degreeShirvari", headerName: "مرتبه شیرواری", width: 140 },
  { field: "shirvariDays", headerName: "روزهای شیرواری/سن", width: 170 },

  {
    field: "daysAfterLastFahli",
    headerName: "روزهای گذشته از آخرین فحلی",
    width: 210,
  },
  {
    field: "daysAfterTalghih",
    headerName: "روزهای گذشته از آخرین تلقیح",
    width: 210,
  },
];
const DamGheyrFahlTolidMesl = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();

  return (
    <Box
      sx={{
        width: "100%",
        height: "82vh",
        backgroundColor: theme.palette.background.alt,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width="90%"
        margin={"auto"}
      >
        <Box>
          <Typography>دام های غیر فحل | 12 راس از 18 راس</Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.background.main,
              ml: "0.5rem",
            }}
          >
            <PrintOutlined />
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.background.main }}
          >
            <Typography>عملیات بیشتر</Typography>
            <KeyboardArrowDownOutlined />
          </Button>
        </Box>
      </Box>
      <Box
        mb="2rem"
        height="70vh"
        width="90%"
        margin={"auto"}
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
            fontSize: "0.6rem",
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
        />
      </Box>
    </Box>
  );
};

export default DamGheyrFahlTolidMesl;
