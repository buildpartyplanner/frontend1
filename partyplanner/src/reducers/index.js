import { LOGIN_SUCCESS } from "../actions";

const initialState = {
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    default:
      return state;
  }
};

export default reducer;
