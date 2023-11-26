import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export function DataCard() {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="overline">Bogget</Typography>
            <Typography variant="h4">$24</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
