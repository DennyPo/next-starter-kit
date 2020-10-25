import { combineReducers } from "redux";

// reducers

import user from "./userReducer";

const reducer = combineReducers({
  user
});

export default reducer;
