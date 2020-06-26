import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Event as IEvent } from "../domain/entity/Event";
import { RootState } from "../domain/entity/RootState";

import eventActions from "../store/Events/action";

import { Button } from "@material-ui/core";
import { TableRow, TableCell, Checkbox } from "@material-ui/core";

const Event: React.FC = () => {
  const events = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    const result = window.confirm("イベントを本当に削除しても良いですか？");
    if (result) {
      dispatch(eventActions.deleteEvent(id));
    }
  };

  const handleReverseFlag = (id: number) => {
    dispatch(eventActions.handleReverseFlag(id));
  };
  return (
    <>
      {events.map(
        (event: IEvent, i) =>
          event.id !== 0 && (
            <TableRow key={i} hover>
              <TableCell>
                <Checkbox onChange={() => handleReverseFlag(event.id)} />
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
