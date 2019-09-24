import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";



const TableComponent = ({ classes,...props }) => {
  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
            <TableCell>Data Owner</TableCell>
            <TableCell>MSE</TableCell>
            <TableCell>Improvement%</TableCell>
            <TableCell>Pay</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rowsData.map(({ data_owner, partial_MSE}) => (
          <TableRow key={data_owner}>
            <TableCell >{data_owner}</TableCell>
            <TableCell>{partial_MSE}</TableCell>
            <TableCell>{partial_MSE}</TableCell>
            <TableCell>{partial_MSE}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
