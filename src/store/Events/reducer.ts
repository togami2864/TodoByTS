import { reducerWithInitialState } from "typescript-fsa-reducers";

import eventActions from "./action";

import { Event } from "../../domain/entity/Event";

const init: Event[] = [
  {
    id: 0,
    title: "",
    body: "",
    flag: false,
  },
];

const eventReducer = reducerWithInitialState(init)
  .case(eventActions.setEvent, (state, payload) => [...state, payload])
  .case(eventActions.deleteAllEvent, (state, payload) => [
    {
      id: 0,
      title: "",
      body: "",
      flag: false,
    },
  ])
  .case(eventActions.deleteEvent, (state, payload) => {
    state = state.filter((e) => e.id !== payload);
    return [...state];
  })
  .case(eventActions.handleReverseFlag, (state, payload) => {
    state.forEach((e) => {
      if (e.id === payload) {
        e.flag = !e.flag;
      }
    });
    return [...state];
  });

export default eventReducer;
