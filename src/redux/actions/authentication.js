import { AUTH_MODE, LOGIN } from '../constants';

export const updateAuthMode = authMode => dispatch => {
    dispatch({type: AUTH_MODE, payload: { authMode } });
}

export const updateUserInfo = payload => dispatch => {
    dispatch({type: LOGIN, payload });
}
