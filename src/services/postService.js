import Config from 'movie-reviews/src/config';
import movies from 'movie-reviews/src/movies';
import utils from 'movie-reviews/src/utils';

export const getPostsService = page => {
    
    return new Promise( (resolve, reject) => {
       
        const result = utils.paginate(movies, 10, page);

        resolve(result);

    });

};

export const getPostService = id => {
    
    return new Promise( (resolve, reject) => {
       
        const result = movies[id];
        
        resolve(result);

    });

};

export const addCommentService = (username, movieId, comment) => {

    Config.firebase.database().ref('movies/' + movieId).push({ username, comment });

};

export const getCommentsService = (movieId, callback) => {

    Config.firebase.database().ref('movies/' + movieId).on('value', (snapshot) => {

        if(snapshot && snapshot.val()) {
            const comments = snapshot.val();
            callback(Object.values(comments));
        } else callback([]);

    });

}