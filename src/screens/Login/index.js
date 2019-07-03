import React, { Component } from 'react';
import { Alert, Keyboard, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { updateAuthMode, updateUserInfo } from 'movie-reviews/src/redux/actions/authentication';
import AuthService from 'movie-reviews/src/services/authService';
import Utils from 'movie-reviews/src/utils';
import Constants from 'movie-reviews/src/constants';
import LoginView from './view';

const showError = () => {

    Alert.alert(
        Constants.errorTitle,
        Constants.errorMessage,
        [
          {text: Constants.okay, onPress: () => console.log('OK Pressed')}
        ],
        { cancelable: true }
    );

};

class Login extends Component {

  state = {
      email: '',
      email2: '',
      password: '',
      password2: '',
      keyboardDidShow: false
  }

  componentDidMount() {
    
    Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

  }

  componentWillUnmount() {
    
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      
  }

  setValue = (key, value) => {
      const obj = {};
      obj[key] = value;
      this.setState(obj);
  }

  login = () => {

    Keyboard.dismiss();

    if( !Utils.validateString(this.state.email) || !Utils.validateString(this.state.password) ) {

        showError();
            
    } else {

        AuthService.loginService({
            email: this.state.email,
            password: this.state.password
        })
        .then(data => {

            Utils.storeData('loggedIn', 'true');
            this.props.updateUserInfo({data});
            this.props.navigation.navigate('Main');

        } )
        .catch(err => showError());

    }

  }

  resetPassword = () => {

    Keyboard.dismiss();
    
    if(!Utils.validateString(this.state.email)) showError();
    
    else {
        
        AuthService.passwordResetService(this.state.email)
        .then(res => this.updateAuthMode('login'))
        .catch(err => showError());

    }

  }

  signUp = () => {

    Keyboard.dismiss();

    if( !Utils.validateString(this.state.email) || !Utils.validateString(this.state.email2) ||
        !Utils.validateString(this.state.password) || !Utils.validateString(this.state.password2) 
        || this.state.email !== this.state.email2 || this.state.password !== this.state.password2 ||
        !Utils.validateString(this.state.email) ) {

        showError();

    } else {

        AuthService.signUpService({

            email: this.state.email,
            password: this.state.password
            
        }).then(data => {

            Utils.storeData('loggedIn', 'true');
            this.props.updateUserInfo({data});
            this.props.navigation.navigate('Main');

        }).catch(err => showError());

    }

  }

  clearInputs = () => this.setState({ email: '', email2: '', password: '', password2: ''});

  _keyboardDidShow = () => this.setState({keyboardDidShow: true});

  _keyboardDidHide = () => {

    this.setState({keyboardDidShow: false});

    if(this.name) this.name.blur();
    if(this.email) this.email.blur();
    if(this.password) this.password.blur();
    if(this.password2) this.password2.blur();

  }

  handleBackButton = () => true;

  clearInput = type => {

    const input = this[type];

    if(input){
      input.setNativeProps({text: ''});
      input.blur();
    }

  }

  setInputRef = (name, ref) => this[name] = ref;

  updateAuthMode = authMode => {

    this.clearInput('email');
    this.clearInput('email2');
    this.clearInput('password');
    this.clearInput('password2');

    this.clearInputs();
    this.props.updateAuthMode(authMode);
    
  }

  render() {

    const { authMode } = this.props.authentication;

    return (<LoginView authMode={authMode} login={this.login} updateAuthMode={this.updateAuthMode}
      signUp={this.signUp} skip={this.skip} setValue={this.setValue} resetPassword={this.resetPassword}
      setInputRef={this.setInputRef} keyboardDidShow={this.state.keyboardDidShow} />)

  }

};

const mapStateToProps = ({ authentication }) => ({
  authentication
});

const mapDispatchToProps = dispatch => ({
  updateAuthMode: authMode => dispatch(updateAuthMode(authMode)),
  updateUserInfo: data => dispatch(updateUserInfo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
