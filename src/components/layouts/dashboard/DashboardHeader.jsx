import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { drawerWidth } from "./constant";

function DashboardHeader() {
  return (
    <AppBar
      position="fixed"
      sx={{
        minHeight: "48px",
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar />
    </AppBar>
  );
}

export default DashboardHeader;
