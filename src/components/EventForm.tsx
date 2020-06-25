import React from "react";

import { TextField, Button, Typography } from "@material-ui/core";
import Icon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";

const EventForm: React.FC = () => {
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
        type="button"
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
