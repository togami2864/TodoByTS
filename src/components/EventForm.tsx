import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../domain/entity/RootState";
import { Event } from "../domain/entity/Event";

import eventActions from "../store/Events/action";

import { TextField, Button, Typography, FormControl } from "@material-ui/core";
import Icon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";

type Props = {
  title: string;
  body: string;
};

const EventForm: React.FC = () => {
  const event = useSelector((state: RootState) => state.event);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (member: Props) => {
    const id = event.length === 0 ? 0 : event.length;
    const newMember = {
      ...member,
      id,
    };
    dispatch(eventActions.setEvent(newMember));
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = () => {
    dispatch(eventActions.deleteAllEvent({}));
  };

  return (
    <>
      <form>
        <Typography component="h2" variant="h4">
          タイトル
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Typography component="h2" variant="h4">
          ボディ
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <Button
        color="primary"
        type="submit"
        variant="contained"
        endIcon={<Icon>send</Icon>}
        onClick={() => handleSubmit({ title, body })}
      >
        イベント作成
      </Button>
      <Button
        color="secondary"
        type="button"
        variant="contained"
        endIcon={<DeleteIcon />}
        onClick={() => deleteAllEvents()}
      >
        全て削除
      </Button>
    </>
  );
};

export default EventForm;
