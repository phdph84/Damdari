import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useGetCustomersQuery } from "States/api";

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
const DamMoraghebat = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();

  return (
    <Box
      mt="40px"
      mb="2rem"
      height="80%"
      width="98%"
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
  );
};

export default DamMoraghebat;
