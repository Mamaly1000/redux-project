import { createStore, combineReducers } from "redux";
import cakeReducer from "../cake_slice/cakeReducer";

const allReducers = combineReducers({
  cake: cakeReducer,
});

const store = createStore(allReducers);

export default store;
