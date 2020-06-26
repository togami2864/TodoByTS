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
  const events = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (member: Props) => {
    const id = events.length === 0 ? 0 : events.length;
    const newMember = {
      ...member,
      id,
    };
    dispatch(eventActions.setEvent(newMember));
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = () => {
    const result = window.confirm(
      "全てのイベントを本当に削除しても良いですか？"
    );
    if (result) {
      dispatch(eventActions.deleteAllEvent({}));
    }
  };

  const isEmptyValue = title === "" && body === "";
  const isEmptyEvents = events.length === 1;

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
        style={{ marginRight: "10px" }}
        type="submit"
        variant="contained"
        endIcon={<Icon>send</Icon>}
        onClick={() => handleSubmit({ title, body })}
        disabled={isEmptyValue}
      >
        イベント作成
      </Button>
      <Button
        color="secondary"
        type="button"
        variant="contained"
        endIcon={<DeleteIcon />}
        onClick={() => deleteAllEvents()}
        disabled={isEmptyEvents}
      >
        全て削除
      </Button>
    </>
  );
};

export default EventForm;
