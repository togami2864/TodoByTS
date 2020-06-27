import React from "react";

import { useSelector } from "react-redux";

import Event from "./Event";

import { Event as IEvent } from "../domain/entity/Event";
import { RootState } from "../domain/entity/RootState";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "./styles/progressbar.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimateProgressProvider";

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

  const progress =
    events.length > 1 ? (events[0].count / (events.length - 1)) * 100 : 0;
  return (
    <>
      <Grid container>
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
        <Grid item xs={5}>
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={progress}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(progress);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  styles={buildStyles({ pathTransition: "none" })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </Grid>
      </Grid>
    </>
  );
};

export default Events;
