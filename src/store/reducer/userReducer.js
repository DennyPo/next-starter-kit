import actionHelper from "../../utils/actionHelper";
import { LOGIN } from "../actions/authActions";

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

        default:
            return state;
    }
};

export default userReducer;
