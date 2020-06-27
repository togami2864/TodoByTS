import React from "react";

import { useSelector } from "react-redux";

import Event from "./Event";

import { Event as IEvent } from "../domain/entity/Event";
import { RootState } from "../domain/entity/RootState";

import { CircularProgressbar } from "react-circular-progressbar";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid,
} from "@material-ui/core";

const Events: React.FC = () => {
  const events = useSelector((state: RootState) => state.events);
  return (
    <>
      <Grid item xs={7}>
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
      </Grid>
      <Grid item xs={3}></Grid>
    </>
  );
};

export default Events;
