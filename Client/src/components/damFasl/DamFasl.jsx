import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Indicator from "components/indicator/Indicator";
import React from "react";
import { useGetCustomersQuery } from "States/api";

const columns = [
  { field: "_id", headerName: "کد دام", width: 70 },
  { field: "name", headerName: "وضعیت", width: 70 },
  { field: "email", headerName: "بهاربند", width: 100 },

  { field: "country", headerName: "سن", width: 60 },
  {
    field: "occupation",
    headerName: "روزهای فحلی",
    width: 180,

    renderCell: (params) => {
      return (
        <Box width={"100px"}>
          <Indicator completed={63} direction={"h"} w={"1.5rem"} h={"18rem"} />
        </Box>
      );
    },
  },
  { field: "role", headerName: "شاخص فحلی", width: 100 },
];
const DamFasl = () => {
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
          fontSize: "0.7rem",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.primary.light,
          fontSize: "0.7rem",
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
  );
};

export default DamFasl;
