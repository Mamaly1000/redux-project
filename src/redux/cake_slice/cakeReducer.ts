import { foodInterface } from "../../types/foodType";
import { RootState } from "../store/store";

const initailCakeState: {
  cake: number;
  foods: foodInterface[];
} = {
  cake: 0,
  foods: [],
};
const cakeReducer = (
  state = initailCakeState,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        cake: state.cake + 1,
      };
    case "GET_FOODS":
      return {
        ...state,
        foods: action.payload,
      };
    default:
      return state;
  }
};
export default cakeReducer;
export const selectCake = (state: RootState) => {
  return state.cake as { foods: foodInterface[]; cake: number };
};
