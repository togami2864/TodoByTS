import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Event as IEvent } from "../domain/entity/Event";
import { RootState } from "../domain/entity/RootState";

import eventActions from "../store/Events/action";

import { Button } from "@material-ui/core";
import { TableRow, TableCell } from "@material-ui/core";

const Event: React.FC = () => {
  const events = useSelector((state: RootState) => state.event);
  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    dispatch(eventActions.deleteEvent(id));
  };
  return (
    <>
      {events.map(
        (event: IEvent, i) =>
          event.id !== 0 && (
            <TableRow key={i}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>{event.id}</TableCell>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.body}</TableCell>
              <TableCell>
                <Button
                  type="button"
                  color="secondary"
                  variant="contained"
                  onClick={() => handleDelete(event.id)}
                >
                  削除
                </Button>
              </TableCell>
            </TableRow>
          )
      )}
    </>
  );
};

export default Event;
