import { DECREMENT, INCREMENT } from "../constants/constants";

const initialState = {
  num1: 0,
  num10: 0
};

export const reducers = (state = initialState, action) => {
  let { num10, num1 } = state;
  switch (action.type) {
    case INCREMENT:
      console.log("increment");
      num1 = num1 + action.payload;
      if (num1 >= 10) {
        num10 = num10 + 1;
        num1 = 0;
      }
      return Object.assign({}, state, { num10: num10, num1: num1 });
    case DECREMENT:
      console.log("decrement");
      num1 = num1 + action.payload;
      if (num1 <= -1) {
        if (num10 > 0) {
          num10 = num10 - 1;
          num1 = 9;
        } else {
          num1 = 0;
        }
      }
      return Object.assign({}, state, { num10: num10, num1: num1 });
    default:
      return state;
  }
};
