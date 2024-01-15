import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Paper,
  Table,
  TableCell,
  TableHead as MuiTableHead,
  TableRow,
  Typography,
} from "@mui/material";
import theme from "../../../theme";

export function TableHead({ columns }) {
  return (
    <MuiTableHead>
      <TableRow sx={{ background: (theme) => theme.palette.neutral[100] }}>
        {columns.map((col) => (
          <TableCell sx={{ textTransform: "uppercase" }} key={col.id}>
            {col.label}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
}
