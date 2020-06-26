import { reducerWithInitialState } from "typescript-fsa-reducers";

import eventActions from "./action";

import { Event } from "../../domain/entity/Event";

const init: Event[] = [
  {
    id: 0,
    title: "",
    body: "",
  },
  {
    id: 1,
    title: "テスト１",
    body: "テスト１",
  },
];

const eventReducer = reducerWithInitialState(init)
  .case(eventActions.setEvent, (state, payload) => [...state, payload])
  .case(eventActions.deleteAllEvent, (state, payload) => [
    {
      id: 0,
      title: "",
      body: "",
    },
  ])
  .case(eventActions.deleteEvent, (state, payload) => {
    state = state.filter((e) => e.id !== payload);
    return [...state];
  });

export default eventReducer;
