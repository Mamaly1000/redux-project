import { Action } from "redux";
import { RootState } from "../store/store";

const initailCakeState: {
  cake: number;
} = {
  cake: 0,
};
const cakeReducer = (state = initailCakeState, action: Action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        cake: state.cake + 1,
      };
    default:
      return state;
      break;
  }
};
export default cakeReducer;
export const selectCake = (state: RootState) => {
  return state.cake;
};
