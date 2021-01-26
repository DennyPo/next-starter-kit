import actionHelper from "../../utils/actionHelper";
import { LOGIN, LOGOUT } from "../actions/authActions";

const defaultState = {
  currentUser: {}
};

 const userReducer = (state = defaultState, action) => {
  switch (action.type) {

    case actionHelper(LOGIN, true):
      return {
        ...state,
        currentUser: action.payload
      }

    case actionHelper(LOGOUT, true):
      return defaultState;

    default:
      return state;
  }
};

export default userReducer;
