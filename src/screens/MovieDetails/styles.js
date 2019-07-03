import { StyleSheet } from 'react-native';
import Constants from 'movie-reviews/src/constants';

export default styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        height: '100%'
    },
    container: {
        backgroundColor: Constants.white,
        flexGrow: 1,
        paddingBottom: 70
    },
    coverImg: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        marginBottom: 10
    },
    coverTxt: {
        color: Constants.white,
        textAlign: 'center',
        fontSize: 20,
        margin: 10
    },
    inputContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    input: {
        backgroundColor: Constants.lightRed,
        margin: 10,
        borderRadius: 23,
        height: 50,
        padding: 15,
        color: Constants.lightGray
    },
    wrapper: {
        backgroundColor: Constants.white
    },
    overlayContainer: {
        justifyContent: 'center',
        padding: 20
    },
    movieInfo: {
        marginBottom: 10
    },
    activityIndicator: {
        marginTop: 20
    },
    noComment: {
        textAlign: 'center',
        marginTop: 10
    }

});