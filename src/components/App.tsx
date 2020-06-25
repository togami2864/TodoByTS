import React from "react";

import EventForm from "./EventForm";
import Events from "./Events";

import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const App: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography component="h4" variant="h3" paragraph>
          イベント作成フォーム
        </Typography>
        <EventForm />
        <Events />
      </Container>
    </>
  );
};

export default App;
