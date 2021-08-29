import { login } from '../../api';
import UserActionTypes from './user.types';

export const setCurrentUser = (user) => {
    if (!user) {
        sessionStorage.removeItem('user');
    }
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user,
    };
};

export const emailSignInStart = () => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
});

export const emailSignInSuccess = (user) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user,
});

export const emailSignInFailure = (error) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error,
});

export const emailSignInStartAsync = (payload) => {
    return (dispatch) => {
        dispatch(emailSignInStart());
        login(payload)
            .then((user) => dispatch(emailSignInSuccess(user)))
            .catch((error) => dispatch(emailSignInFailure(error)));
    };
};
