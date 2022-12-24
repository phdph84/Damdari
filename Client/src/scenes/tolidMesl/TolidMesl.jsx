import { Box, Tab, Tabs, styled, useTheme } from "@mui/material";
import DamFahlTolidMesl from "components/damfahlTolidMesl/DamFahlTolidMesl";
import DamGheyrFahlTolidMesl from "components/damGheyrFahlTolidMesl/DamGheyrFahlTolidMesl";
import FahliNamonazamTolidMesl from "components/fahliNamonazamTolidMesl/FahliNamonazamTolidMesl";
import MashkokSeghtTolidMesl from "components/mashkokSeghtTolidMesl/MashkokSeghtTolidMesl";
import { useState } from "react";

const TabSmall = styled(Tab)(({ theme, Colors, mode }) => ({
  fontSize: "12px",
  color: `grey`,
  backgroundColor: "inherit",
}));
// const TabsSmall = styled(Tabs)(({ theme }) => ({
//   height: "10px",
// }));
const TolidMesl = ({ mode }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ height: "35px" }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          scrollButtons="auto"
          indicatorColor="#1c1e2a"
          sx={{
            // backgroundColor: "red",
            "& .Mui-selected": {
              color: `${theme.palette.primary.light} !important`,
              //   backgroundColor: "red",
            },
          }}
        >
          <TabSmall mode={mode} sx={{ mr: "1rem" }} label="دام های فحل" />
          <TabSmall mode={mode} label="غیر فحل" />
          <TabSmall mode={mode} label="فحلی نامنظم" />
          <TabSmall mode={mode} label="مشکوک به سقط" />
        </Tabs>
      </Box>
      <Box
        sx={{
          padding: 0,
          m: "1rem 1rem 0 1rem",
          //   backgroundColor: theme.palette.primary.main,
        }}
      >
        {tabIndex === 0 && (
          <Box>
            <DamFahlTolidMesl />
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <DamGheyrFahlTolidMesl />
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <FahliNamonazamTolidMesl />
          </Box>
        )}
        {tabIndex === 3 && (
          <Box>
            <MashkokSeghtTolidMesl />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TolidMesl;
