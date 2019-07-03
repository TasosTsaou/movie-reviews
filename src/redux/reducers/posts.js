import {GET_POSTS, SET_LOADING_STATE} from '../constants'

const initialState = { data: [], loading: false };

const postsReducer = (state = initialState, {type, payload}) => {
  
    switch (type) {
      
      case GET_POSTS:
        return { ...state, ...payload };
      case SET_LOADING_STATE:
        return { ...state, ...payload };
      default:
        return state;
        
    }
}

export default postsReducer;
