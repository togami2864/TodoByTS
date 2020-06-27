import { reducerWithInitialState } from "typescript-fsa-reducers";

import eventActions from "./action";

import { Event } from "../../domain/entity/Event";

const init: Event[] = [
  {
    id: 0,
    title: "",
    body: "",
    flag: false,
    count: 0,
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
      count: 0,
    },
  ])
  .case(eventActions.deleteEvent, (state, payload) => {
    state = state.filter((e) => e.id !== payload);

    //checkが入っているイベントの数の計算//
    const checked = state.filter((event) => event.flag);
    state.map((event) => (event.count = checked.length));
    ///////////////////////////////
    return [...state];
  })
  .case(eventActions.handleReverseFlag, (state, payload) => {
    state.forEach((e) => {
      if (e.id === payload) {
        e.flag = !e.flag;
      }
    });
    //checkが入っているイベントの数の計算//
    const checked = state.filter((event) => event.flag);
    state.map((event) => (event.count = checked.length));
    ///////////////////////////////

    return [...state];
  });

export default eventReducer;
