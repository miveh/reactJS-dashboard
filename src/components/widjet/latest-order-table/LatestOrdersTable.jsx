import React from "react";
import { DataTable } from "../../../components";
import { Chip } from "@mui/material";

const statusMapColor = {
  0: "warning",
  1: "success",
  2: "error",
};

const statusMapLabel = {
  0: "pending",
  1: "Delivered",
  2: "Refunded",
};

export function LatestOrdersTable() {
  return (
    <DataTable
      caption={"Latest Orders"}
      columns={[
        {
          id: 1,
          label: "Order ref",
          renderCol: (row) => row.orderRef,
        },
        {
          id: 2,
          label: "Table Header",
          renderCol: (row) => row.customer,
        },
        {
          id: 3,
          label: "Date",
          renderCol: (row) => row.date,
        },
        {
          id: 4,
          label: "Status",
          renderCol: (row) => (
            <Chip
              sx={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
              }}
              label={statusMapLabel[row.status]}
              color={statusMapColor[row.status]}
            />
          ),
        },
      ]}
      rows={[
        {
          id: 1,
          orderRef: "CDOD2324",
          customer: "Zahra Mivehchi",
          date: "12/04/2019",
          status: 1,
        },
        {
          id: 1,
          orderRef: "CDOD2324",
          customer: "Zahra Mivehchi",
          date: "12/04/2019",
          status: 2,
        },
        {
          id: 1,
          orderRef: "CDOD2324",
          customer: "Zahra Mivehchi",
          date: "12/04/2019",
          status: 2,
        },
        {
          id: 1,
          orderRef: "CDOD2324",
          customer: "Zahra Mivehchi",
          date: "12/04/2019",
          status: 0,
        },
      ]}
    ></DataTable>
  );
}
