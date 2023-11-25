import React from "react";
import { AppBar, Box, CssBaseline, Drawer, Toolbar } from "@mui/material";
import { drawerWidth } from "./constant";

function DashboardSideBar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    ></Drawer>
  );
}

export default DashboardSideBar;
