import { AppBar, Box, CssBaseline, Drawer, Toolbar } from "@mui/material";
import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSideBar from "./DashboardSideBar";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DashboardHeader />
      <DashboardSideBar />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3, mt: "48px" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
