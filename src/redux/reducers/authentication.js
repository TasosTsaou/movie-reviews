import { AUTH_MODE, LOGIN } from '../constants'

const initialState = { data: {}, authMode: 'login' };

const authenticationReducer = (state = initialState, {type, payload}) => {

    switch (type) {
      
      case LOGIN:
        return {...state, ...payload};
      case AUTH_MODE:
        return {...state, ...payload};
      default:
        return state;
        
    }
}

export default authenticationReducer;
