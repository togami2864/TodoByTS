import { reducerWithInitialState } from "typescript-fsa-reducers";

import eventActions from "./action";

import { Event } from "../../domain/entity/Event";

const init: Event[] = [
  {
    id: 0,
    title: "",
    body: "",
  },
];

const eventReducer = reducerWithInitialState(init)
  .case(eventActions.setEvent, (state, payload) => [...state, payload])
  .case(eventActions.deleteAllEvent, () => [])
  .case(eventActions.deleteEvent, (state, payload) => ({
    ...state,
    ...payload,
  }));

export default eventReducer;
