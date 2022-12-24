import { Box, Tab, Tabs, styled, useTheme } from "@mui/material";
import DamFahlTolidMesl from "components/damfahlTolidMesl/DamFahlTolidMesl";
import DamGheyrFahlTolidMesl from "components/damGheyrFahlTolidMesl/DamGheyrFahlTolidMesl";
import FahliNamonazamTolidMesl from "components/fahliNamonazamTolidMesl/FahliNamonazamTolidMesl";
import MashkokSeghtTolidMesl from "components/mashkokSeghtTolidMesl/MashkokSeghtTolidMesl";
import SalamatS from "components/salamatS/SalamatS";
import ZamingirSalamat from "components/zamingirSalamat/ZamingirSalamat";
import { useState } from "react";

const TabSmall = styled(Tab)(({ theme, Colors, mode }) => ({
  fontSize: "12px",
  color: `grey`,
  backgroundColor: "inherit",
}));
// const TabsSmall = styled(Tabs)(({ theme }) => ({
//   height: "10px",
// }));
const Salamat = ({ mode }) => {
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
              color: `${theme.palette.secondary.light} !important`,
              backgroundColor: theme.palette.secondary[700],
              borderRadius: "20px 20px 0 0",
            },
          }}
        >
          <TabSmall mode={mode} sx={{ mr: "1rem" }} label="ارزیابی سلامت" />
          <TabSmall mode={mode} label="نیازمند به مراقبت" />
          <TabSmall mode={mode} label="سلامت" />
          <TabSmall mode={mode} label="زمین گیر شده" />
          <TabSmall mode={mode} label="تازه زایش کرده" />
          <TabSmall mode={mode} label="روند فعالیت / نشخوار" />
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
            <SalamatS />
          </Box>
        )}
        {tabIndex === 3 && (
          <Box>
            <ZamingirSalamat />
          </Box>
        )}
        {tabIndex === 4 && (
          <Box>
            <MashkokSeghtTolidMesl />
          </Box>
        )}
        {tabIndex === 5 && (
          <Box>
            <MashkokSeghtTolidMesl />
          </Box>
        )}
        {tabIndex === 6 && (
          <Box>
            <MashkokSeghtTolidMesl />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Salamat;
