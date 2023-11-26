import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export function DataCard({ label, value, avatar, subtitle }) {
  return (
    <Card>
      <CardContent
        sx={{
          height: 140,
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography
              sx={{ textTransform: "overline", color: "text.secondary" }}
              variant="overline"
            >
              {label}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Box>

          {avatar ? <Box>{avatar}</Box> : null}
        </Box>

        {subtitle ? <Box>{subtitle}</Box> : null}
      </CardContent>
    </Card>
  );
}
