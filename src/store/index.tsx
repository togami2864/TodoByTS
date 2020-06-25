import { createStore, combineReducers, compose } from "redux";

import eventReducer from "./Events/reducer";

import { RootState } from "../domain/entity/RootState";

const store = createStore(
  combineReducers<RootState>({
    event: eventReducer,
  }),
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
