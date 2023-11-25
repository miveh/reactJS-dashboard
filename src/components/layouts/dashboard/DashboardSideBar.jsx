import React from "react";
import { AppBar, Box, CssBaseline, Drawer, Toolbar } from "@mui/material";
import { drawerWidth } from "./constant";
import { LogoIcon } from "../../../assets/svg/LogoIcon";

function DashboardSideBar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: (theme) => theme.palette.neutral[900],
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box p={3}>
        <LogoIcon />
      </Box>
    </Drawer>
  );
}

export default DashboardSideBar;
