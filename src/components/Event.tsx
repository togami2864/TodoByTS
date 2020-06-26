import React from "react";
import { useSelector } from "react-redux";

import { Event as IEvent } from "../domain/entity/Event";
import { RootState } from "../domain/entity/RootState";

import { Button } from "@material-ui/core";
import { TableRow, TableCell } from "@material-ui/core";

const Event: React.FC = () => {
  const events = useSelector((state: RootState) => state.event);
  return (
    <TableRow>
      {events.map(
        (event: IEvent, i) =>
          event.id !== 0 && (
            <React.Fragment key={i}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>{event.id}</TableCell>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.body}</TableCell>
              <TableCell>
                <Button type="button" color="secondary" variant="contained">
                  削除
                </Button>
              </TableCell>
            </React.Fragment>
          )
      )}
    </TableRow>
  );
};

export default Event;
