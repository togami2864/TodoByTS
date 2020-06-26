import React from "react";

import { useSelector } from "react-redux";

import Event from "./Event";

import { Event as IEvent } from "../domain/entity/Event";
import { RootState } from "../domain/entity/RootState";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const Events: React.FC = () => {
  const events = useSelector((state: RootState) => state.event);
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
