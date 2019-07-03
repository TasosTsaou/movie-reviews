import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'movie-reviews/src/constants';
import { colors } from 'react-native-elements';

const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 3;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: Constants.lightRed
  },
  scrollContainer: {
    backgroundColor: Constants.pastelRed,
    flex: 1,
    height: window.height,
    marginBottom: 0
  },
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  input: {
    height: window.height >= Constants.responsivenessLimit ? 50 : 40,
    backgroundColor: Constants.gray,
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 50,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  logo: {
    display: window.height <= Constants.responsivenessLimit ? 'none' : 'flex',
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20
  },
  register: {
    marginBottom: 20, 
    width: window.width -100,
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    backgroundColor: '#ffae'
  },
  loginBtn: {
    width: window.width - 50,
    marginTop: 20,
    marginBottom: 20
  },
  bottomText: {
    color: Constants.white
  },
  resetPasswordText: {
    left: 25,
    position: 'absolute'
  },
  signUpText: {
    right: 25,
    position: 'absolute'
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20
  },
  goBack: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    left: 18,
    position: 'absolute'
  },
  title: {
    color: Constants.white,
    fontSize: 25,
    marginBottom: 40,
    fontFamily: 'sans-serif-light'
  },
  button: {
    borderRadius: 5,
    borderColor: Constants.white
  },
  buttonTitle: {
    color: Constants.white
  }

});

