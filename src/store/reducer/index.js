import { combineReducers } from "redux";
import { HYDRATE } from 'next-redux-wrapper';

// reducers

import user from "./userReducer";

const combinedReducer = combineReducers({
  user
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state.count) nextState.count = state.count // preserve count value on client side navigation
    return nextState;

  } else {
    return combinedReducer(state, action);
  }
}

export default reducer;
