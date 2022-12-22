import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "States/api";
import Header from "components/header/Header";
import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log("🚀 ~ file: Customers.jsx:9 ~ Customers ~ data", data);
  const columns = [
    { field: "_id", headerName: "کد دام", width: 80 },
    { field: "name", headerName: "وضعیت", width: 80 },
    { field: "email", headerName: "بهاربند", width: 100 },
    // {
    //   field: "phoneNumber",
    //   headerName: "Phone Number",
    //   flex: 0.5,
    //   renderCell: (params) => {
    //     return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2=$3");
    //   },
    // },
    { field: "country", headerName: "سن", width: 100 },
    { field: "occupation", headerName: "روزهای فحلی", width: 200 },
    { field: "role", headerName: "شاخص فحلی", width: 100 },
  ];
  const columns1 = [
    { field: "_id", headerName: "کد دام", width: 80 },
    { field: "name", headerName: "وضعیت", width: 80 },
    { field: "email", headerName: "مرتبه شیرواری", width: 100 },
    // {
    //   field: "phoneNumber",
    //   headerName: "Phone Number",
    //   flex: 0.5,
    //   renderCell: (params) => {
    //     return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2=$3");
    //   },
    // },
    { field: "country", headerName: "سن / روزهای شیرواری", width: 100 },
    { field: "occupation", headerName: "شاخص سلامت", width: 200 },
    { field: "role", headerName: "علت", width: 100 },
  ];
  return (
    <Box m="1.5rem  2.5rem">
      <Header title={"پنل مدیریت"} subTitle={""} />
      <Box
        mt="40px"
        height="40vh"
        width="50%"
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
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
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

      <Box
        mt="10px"
        height="40vh"
        width="50%"
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
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
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
export default Customers;
