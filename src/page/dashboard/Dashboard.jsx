import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { DataCard } from "../../components";

function Dashboard() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
