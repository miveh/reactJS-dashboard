import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

export function CaptionList({
  actionName = "",
  action = () => {},
  caption = "",
  listItems = [],
}) {
  return (
    <Box mt={3} component={Paper}>
      <Box padding={3} paddingTop={4}>
        <Typography variant="h6">{caption}</Typography>
      </Box>

      <Box>
        <List>
          <Divider component="li" />
          {listItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <MoreVertIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar src={item.avatar}>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>

      <Box padding={2}>
        <Button variant="text" color="primary" onClick={action}>
          {actionName}
        </Button>
      </Box>
    </Box>
  );
}
