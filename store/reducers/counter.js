import { counterTypes } from "../actionTypes";

export default function counter(state = 0, action) {
  console.log(action);
  const { payload } = action;

  switch (action.type) {
    case counterTypes.INCREMENT:
      return state + (payload && payload.value || 1);
    case counterTypes.INCREMENT_IF_ODD:
      return state % 2 !== 0 ? state + 1 : state;
    case counterTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
