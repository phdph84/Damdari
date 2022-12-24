import { KeyboardArrowDownOutlined, PrintOutlined } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useGetCustomersQuery } from "States/api";

const columns1 = [
  { field: "_id", headerName: "کد دام", width: 120 },
  { field: "name", headerName: "وضعیت", width: 120 },
  { field: "baharband", headerName: "بهاربند", width: 120 },

  { field: "email", headerName: "مرتبه شیرواری", width: 150 },

  { field: "country", headerName: "سن / روزهای شیرواری", width: 190 },
  { field: "dailyNoshkhar", headerName: "نشخوار روزانه", width: 190 },
  {
    field: "occupation",
    headerName: "شاخص سلامت",
    width: 220,
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
];
const SalamatS = () => {
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
          <Typography>مشکوک به سقط | 0 راس از 7 راس</Typography>
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
        mt="40px"
        mb="2rem"
        height="80%"
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
        />
      </Box>
    </Box>
  );
};

export default SalamatS;
