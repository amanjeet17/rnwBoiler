import { USER_LOGGED_IN,USER_LOGGED_OUT } from "../actionTypes/auth";

const initialState = {
    isAuthenticated: false,
    user_details: {},
    account_details: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
            isAuthenticated: true,
            user_details: action.payload,
            };
        case USER_LOGGED_OUT:
            return {
            isAuthenticated: false,
            user_details: {},
            };
        default:
            return state;
    }
};