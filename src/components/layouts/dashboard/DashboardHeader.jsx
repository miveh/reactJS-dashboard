import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import { drawerWidth } from "./constant";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";

function DashboardHeader() {
  return (
    <AppBar
      position="fixed"
      sx={{
        minHeight: "48px",
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        background: (theme) => theme.palette.background.paper,
      }}
    >
      <Toolbar sx={{ gap: 1 }}>
        <Box fullWidth flexGrow={1}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box display={"flex"} gap={1}>
          <IconButton>
            <PeopleIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <Avatar sx={{ width: "40px", height: "40px" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DashboardHeader;
