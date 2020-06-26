import actionCreatorFactory from "typescript-fsa";

import { Event } from "../../domain/entity/Event";

const actionCreator = actionCreatorFactory();

const eventActions = {
  setEvent: actionCreator<Event>("SET_EVENT"),
  deleteEvent: actionCreator<number>("DELETE_EVENT"),
  deleteAllEvent: actionCreator<{}>("DELETE_ALL_EVENT"),
};

export default eventActions;
