import { createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "../cake_slice/cakeReducer";
import logger from "redux-logger";
const allReducers = combineReducers({
  cake: cakeReducer,
});

const store = createStore(allReducers, applyMiddleware(logger));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
