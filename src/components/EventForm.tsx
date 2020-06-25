import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../domain/entity/RootState";
import { Event } from "../domain/entity/Event";

import eventActions from "../store/Events/action";

import { TextField, Button, Typography } from "@material-ui/core";
import Icon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";

const EventForm: React.FC = () => {
  const event = useSelector((state: RootState) => state.event);
  const dispatch = useDispatch();

  const handleSubmit = (member: Event) => {
    dispatch(eventActions.setEvent(member));
  };

  return (
    <>
      <Typography component="h2" variant="h4">
        タイトル
      </Typography>
      <TextField variant="outlined" margin="normal" fullWidth />
      <Typography component="h2" variant="h4">
        ボディ
      </Typography>
      <TextField variant="outlined" margin="normal" fullWidth />
      <Button
        color="primary"
        type="submit"
        variant="contained"
        endIcon={<Icon>send</Icon>}
      >
        イベント作成
      </Button>
      <Button
        color="secondary"
        type="button"
        variant="contained"
        endIcon={<DeleteIcon />}
      >
        全て削除
      </Button>
    </>
  );
};

export default EventForm;
