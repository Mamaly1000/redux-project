import { foodInterface } from "../../types/foodType";

export function buyCake() {
  return {
    type: "BUY_CAKE",
  };
}
export function getFoods(data: foodInterface[]) {
  return {
    type: "GET_FOODS",
    payload: data,
  };
}
