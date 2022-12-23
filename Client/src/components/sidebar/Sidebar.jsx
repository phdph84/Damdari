import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profileImage from "../../assets/profile.jpg";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOulined,
  PieChartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const navItems = [
  {
    text: "پنل مدیریت",
    t: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "گزارش",
    t: "Report",
    icon: null,
  },
  {
    text: "تولید مثل",
    t: "TolidMesl",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "سلامت",
    t: "Salamat",
    icon: <Groups2Outlined />,
  },
  {
    text: "بهاربند",
    t: "Baharband",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "گوساله",
    t: "Gosale",
    icon: <PublicOutlined />,
  },
  {
    text: "نگهداری سیستم",
    t: "NegahdariSystem",
    icon: <PublicOutlined />,
  },
  {
    text: "مزرعه",
    t: "Mazrae",
    icon: null,
  },
  {
    text: "دام",
    t: "dam",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "رویداد",
    t: "Event",
    icon: <TodayOutlined />,
  },
  {
    text: "بهاربند",
    t: "BaharBandd",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "تنظیمات",
    t: "Tanzimat",
    icon: <PieChartOutlined />,
  },
  {
    text: "کیف پول",
    t: "Kifpol",
    icon: null,
  },

  {
    text: "نگهداری و بروزرسانی سیستم",
    t: "NegahdaryAndAUpdate",
    icon: <AdminPanelSettingsOutlined />,
  },
  // {
  //   text: "Performance",
  //   icon: <TrendingUpOutlined />,
  // },
];
const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const mode = useSelector((state) => state.global.mode);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="right"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem  5rem 0rem 2rem">
              <Box
                color={theme.palette.secondary.main}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={"0.5rem"}
                  mb={"1rem"}
                >
                  {/* <Typography variant="h4" fontWeight="bold">
                    رهبان
                  </Typography> */}
                  {mode === "dark" ? (
                    <img
                      alt="img1"
                      src={require("../../assets/logo rahbaan renderi dark.png")}
                      style={{
                        width: "100px",
                        height: "40px",
                        marginTop: "10px",
                      }}
                    ></img>
                  ) : (
                    <img
                      alt="img1"
                      src={require("../../assets/logo rahbaan renderi copy-light.png")}
                      style={{
                        width: "100px",
                        height: "40px",
                        marginTop: "10px",
                      }}
                    ></img>
                  )}
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </Box>
            </Box>
            <List>
              {navItems.map(({ text, icon, t }) => {
                if (!icon) {
                  return (
                    <Typography
                      fontSize={"1rem"}
                      key={text}
                      sx={{ m: "2.25rem 3rem 0.5rem 0" }}
                    >
                      {text}
                    </Typography>
                  );
                }

                const lcText = t.toLocaleLowerCase();

                return (
                  <ListItem key={t} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[500]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[900]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          mr: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{
                          ml: "2rem",
                          textAlign: "start",
                        }}
                      >
                        {active === lcText && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box position={"absolute"} bottom="2rem">
            <Divider />
            <Box
              textTransform={"none"}
              gap="1rem"
              m="1.5rem 3rem 0 2rem"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component={"img"}
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius={"50%"}
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign={"right"}>
                <Typography
                  fontWeight={"bold"}
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontWeight={"bold"}
                  fontSize="0.6rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>

              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px",
                }}
              />
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
