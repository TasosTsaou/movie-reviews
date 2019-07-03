import {GET_POSTS, SET_LOADING_STATE} from '../constants';
import { getPostsService } from 'movie-reviews/src/services/postService';

export const getPosts = page => dispatch => {

    dispatch({type: SET_LOADING_STATE, payload: { loading: true } });

    /* This timeout must exist because a lot of work in a short time period blocks the main
    UI thread */
    setTimeout(() => {

        getPostsService(page)
        .then(movies => dispatch({type: GET_POSTS, payload: { data: movies, loading: false } }))
        .catch(error => console.log(error));

    }, 1000);

}

export const setLoadingState = payload => dispatch => {

    dispatch({type: SET_LOADING_STATE, payload });

}