import React from "react";

import Event from "./Event";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const Events: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>ID</TableCell>
            <TableCell>タイトル</TableCell>
            <TableCell>ボディ</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Event />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Events;
