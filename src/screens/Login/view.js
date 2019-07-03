import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-native-elements';
import Config from 'movie-reviews/src/config';
import Constants from 'movie-reviews/src/constants';
import styles from './styles';

const LoginView = props => {

    const { authMode, updateAuthMode, setValue, login, signUp, resetPassword, setInputRef,
      keyboardDidShow } = props;

    const verticalOffset = Config.deviceHeight <= Constants.responsivenessLimit ?
      (authMode !== 'signup' ? -30 : -30) : (authMode !== 'signup' ? -50 : -20);

    return (

      <KeyboardAvoidingView style={styles.mainContainer} keyboardVerticalOffset={verticalOffset}
        behavior="padding" >

        <View style={styles.container} contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="always" >

          { (authMode !== 'signup' || !keyboardDidShow) &&

            <Text style={styles.title}>{Constants.appName}</Text>
          
          }

          <TextInput
            placeholder="E-mail"
            style={styles.input}
            onChangeText={text=>setValue('email', text)}
            ref={input => { setInputRef('email', input) }}
          />

          { authMode === 'signup' &&

          <TextInput
            placeholder="Confirm E-mail"
            style={styles.input}
            onChangeText={text=>setValue('email2', text)}
            ref={input => { setInputRef('email2', input) }}
          />

          }

          { authMode !== 'resetpassword' &&

          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            onChangeText={text=>setValue('password', text)}
            ref={input => { setInputRef('password', input) }}
          />

          }

          { authMode === 'signup' &&

          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            secureTextEntry
            onChangeText={text=>setValue('password2', text)}
            ref={input => { setInputRef('password2', input) }}
          />

          }
          
          { authMode === 'login' && !keyboardDidShow &&

          <Button onPress={()=>login()} buttonStyle={styles.button} titleStyle={styles.buttonTitle}
            type="outline" containerStyle={styles.loginBtn} icon={{name: 'person', color: Constants.white}} title="Login" />
          
          }

          { authMode === 'resetpassword' && !keyboardDidShow &&

          <Button onPress={()=>resetPassword()} buttonStyle={styles.button} titleStyle={styles.buttonTitle}
            type="outline" containerStyle={styles.loginBtn} icon={{name: 'person', color: Constants.white}} title="Reset Password" />
          
          }

          { authMode === 'signup' && !keyboardDidShow &&

          <Button onPress={()=>signUp()} buttonStyle={styles.button} containerStyle={styles.loginBtn}
            type="outline" titleStyle={styles.buttonTitle} icon={{name: 'person-add', color: Constants.white}} title="Sign Up" />
          
          }
            
          { authMode === 'login' && !keyboardDidShow &&
          
          <View style={styles.bottomContainer}>

            <TouchableOpacity onPress={()=>updateAuthMode('resetpassword')} style={styles.resetPasswordText} activeOpacity={0.6}>
              <Text style={styles.bottomText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>updateAuthMode('signup')} style={styles.signUpText} activeOpacity={0.6}>
              <Text style={styles.bottomText}>Create Account</Text>
            </TouchableOpacity>

          </View>

          }

          { authMode !== 'login' && !keyboardDidShow &&

          <View style={styles.bottomContainer}>

            <TouchableOpacity onPress={()=>updateAuthMode('login')} style={styles.goBack} activeOpacity={0.6}>
              <Icon name='chevron-left' size={25} color={Constants.white} />
              <Text style={styles.bottomText}>Back</Text>
            </TouchableOpacity>

          </View>

          }

        </View>

      </KeyboardAvoidingView>
  
      );

}

LoginView.propTypes = {

  authMode: PropTypes.string,
  updateAuthMode: PropTypes.func,
  setValue: PropTypes.func,
  login: PropTypes.func,
  signUp: PropTypes.func,
  resetPassword: PropTypes.func,
  setInputRef: PropTypes.func,
  keyboardDidShow: PropTypes.bool,

};

LoginView.defaultProps = {

  authMode: 'login',
  updateAuthMode: ()=>{},
  setValue: ()=>{},
  login: ()=>{},
  signUp: ()=>{},
  resetPassword: ()=>{},
  setInputRef: ()=>{},
  keyboardDidShow: false

};

export default LoginView;
