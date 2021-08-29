import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    isFetching: false,
    currentUser: null,
    error: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                ...state,
                isFetching: true
            }
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;