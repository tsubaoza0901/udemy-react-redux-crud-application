import { INCREMENT, DECREMENT } from '../actions'; // Actionのtypeのimport

// State（状態）の初期値設定
const initialState = { value: 0 };

//"count"Reducerの定義
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
