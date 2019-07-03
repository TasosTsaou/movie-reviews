import { StyleSheet } from 'react-native';
import Constants from 'movie-reviews/src/constants';

export default StyleSheet.create({

    container: {
        paddingTop: 50
    },
    button: {
        margin: 20,
        backgroundColor: Constants.white
    },
    activityIndicator: {
        height: 80
    },
    bottomContainer: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
