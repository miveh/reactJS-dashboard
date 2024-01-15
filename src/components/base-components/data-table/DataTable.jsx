import {
  Box,
  Card,
  CardHeader,
  Paper,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

export function DataTable({ caption = "", columns, rows }) {
  return (
    <Card sx={{ width: "100%", mt: 3 }}>
      <Box padding={3} paddingTop={4}>
        <Typography variant="h6">{caption}</Typography>
      </Box>

      <Table>
        <TableHead columns={columns} />
        <TableBody rows={rows} columns={columns}></TableBody>
      </Table>
    </Card>
  );
}
