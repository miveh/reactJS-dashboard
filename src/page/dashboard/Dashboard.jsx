import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

import { DataCard, LatestProductList } from "../../components";
import People from "@mui/icons-material/People";
import React from "react";
import { LatestOrdersTable } from "../../components/widjet/latest-order-table/LatestOrdersTable";

function Dashboard() {
  return (
    <Box sx={{ mt: 3, bgcolor: (theme) => theme.palette.background.default }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard
            subtitle={
              <Typography color="text.secondary" variant="captain">
                Sinc Last Month
              </Typography>
            }
            label="Bogget"
            value="$24k"
            avatar={
              <Avatar sx={{ bgcolor: (theme) => theme.palette.success.main }}>
                <People />
              </Avatar>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard
            subtitle={
              <Typography color="text.secondary" variant="captain">
                Sinc Last Month
              </Typography>
            }
            label="Bogget"
            value="$24k"
            avatar={
              <Avatar sx={{ bgcolor: (theme) => theme.palette.secondary.main }}>
                <People />
              </Avatar>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard
            subtitle={
              <Typography color="text.secondary" variant="captain">
                Sinc Last Month
              </Typography>
            }
            label="Bogget"
            value="$24k"
            avatar={
              <Avatar sx={{ bgcolor: (theme) => theme.palette.warning.main }}>
                <People />
              </Avatar>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard
            subtitle={<LinearProgress> </LinearProgress>}
            label="Bogget"
            value="$24k"
            avatar={
              <Avatar sx={{ bgcolor: (theme) => theme.palette.error.main }}>
                <People />
              </Avatar>
            }
          />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4} lg={3}>
          <LatestProductList />
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          <LatestOrdersTable />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
