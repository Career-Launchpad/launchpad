import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { DataTable, DataTableRow } from "../../components/DataTable";

const headers = [{ name: "Name", id: "name" }];

const CompanyTable = ({ Companies }) => {
  return (
    <DataTable headers={headers}>
      {Companies.map((Company, i) => {
        return (
          <DataTableRow key={Company.id || i} data={Company}>
            <TableRow>
              <TableCell>{Company.name}</TableCell>
            </TableRow>
          </DataTableRow>
        );
      })}
    </DataTable>
  );
};

export default CompanyTable;
