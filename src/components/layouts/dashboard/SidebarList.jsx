import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import React from "react";
import { MenuItems } from "./constant";

function SidebarList() {
  return (
    <nav aria-label="main mailbox folders">
      <List>
        {MenuItems.map(({ Icon, ...item }) => (
          <ListItem
            disablePadding
            key={item.id}
            sx={{
              "& .MuiButtonBase-root:hover": {
                background: "#555555",
                borderRadius: "4px",
              },
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Icon
                  sx={{
                    color: (theme) => theme.palette.neutral[400],
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: (theme) => theme.palette.neutral[300],
                }}
                primary={item.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
}

export default SidebarList;
