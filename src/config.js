import * as firebase from 'firebase';
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
const { width, height } = window;

const firebaseConfig = {
    apiKey: "AIzaSyC9_W650l_Fp-t_oo65iyVeWZGwmNBdkD0",
    authDomain: "movie-reviews-f4af0.firebaseapp.com",
    databaseURL: "https://movie-reviews-f4af0.firebaseio.com",
    projectId: "movie-reviews-f4af0",
    storageBucket: "movie-reviews-f4af0.appspot.com",
    messagingSenderId: "672879009111",
    appId: "1:672879009111:web:2c02822eff4f799a"
};

const firebaseObj = firebase.initializeApp(firebaseConfig);

export default {

    baseURL: 'https://gamenews-app.herokuapp.com',
    httpConfig: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    disableWarnings: true,
    deviceWidth: width,
    deviceHeight: height,
    firebase: firebaseObj

}