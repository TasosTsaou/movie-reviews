import Config from 'movie-reviews/src/config';

const loginService = ({ email,password }) => {

    return new Promise( (resolve, reject) => {

        Config.firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => resolve(res) )
        .catch(err => reject('error'));

    });

};

const signUpService = ({ email,password }) => {

    return new Promise( (resolve, reject) => {

        Config.firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => resolve(res) )
        .catch(err => reject('error'));

    });

};

const passwordResetService = email => {

    return new Promise( (resolve, reject) => {

        Config.firebase.auth().sendPasswordResetEmail(email)
        .then(res => resolve(res) )
        .catch(err => reject('error'));

    });

};

export default { loginService, signUpService, passwordResetService };