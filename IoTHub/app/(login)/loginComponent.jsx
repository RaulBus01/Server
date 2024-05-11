import { View, Text, Pressable,TextInput,StyleSheet,TouchableOpacity, Platform} from 'react-native'
import React from 'react'
import { signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail } from 'firebase/auth'
import {stylesLogin} from './loginStyles.jsx'

import { Ionicons } from '@expo/vector-icons';
import { auth,app } from '../../configFirebase.js';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../../toastConfig'
const loginComponent = () => {
    
      
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  
  const handleLogin = () => {
   
    if (email === '' || password === '') {
      Toast.show({
        type: 'error',
        text1: 'Please fill in all fields ',
        autoHide: true,
      });
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          autoHide: true,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        Toast.show({
          type: 'error',
          text1: 'Invalid email or password',
          autoHide: true,
        });
      });

  }
  const handleGoogleLogin = () => {
    
    const provider = new GoogleAuthProvider();
    if (Platform.OS === 'web')
      {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;

      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;

         

        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          
          Toast.show({
            type: 'error',
            text1: 'An error occurred while trying to sign in with Google',
            autoHide: true,
          });
        });
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          
          Toast.show({
            type: 'error',
            text1: 'An error occurred while trying to sign in with Google',
            autoHide: true,
          });
        });
      }

  }
  const handleForgotPassword = () => {
    if (email === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter your email address ',
        autoHide: true,
      });
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        
        Toast.show({
          type: 'success',
          text1: 'Password reset email sent',
          autoHide: true,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Toast.show({
          type: 'error',
          text1: 'An error occurred while trying to send the password reset email',
          autoHide: true,
        });
      });
  }
 



  

        
        
        
  return (
    <>
      <View style={stylesLogin.content}>
        <Text style={stylesLogin.textProfile}> You need to login to access your profile</Text>
        {Platform.OS === 'web' ? (
          <>
            <Pressable style={stylesLogin.googleButton} onPress={handleGoogleLogin}>
              <Ionicons name="logo-google" size={20} style={stylesLogin.logoGoogle} />
              <Text style={stylesLogin.loginText}>Log In with Google</Text>
            </Pressable>

            <Text style={stylesLogin.textProfile}> Or </Text>
          </>
        ) : null}
        <TextInput
          title="Email"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={stylesLogin.inputContainer}
        />

        <View style={stylesLogin.passwordContainer}>
          <TextInput
            title="Password"
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            style={stylesLogin.inputContainer}
            onChangeText={(text) => setPassword(text)}
          />
          <Ionicons
            name={!isPasswordVisible ? "eye" : "eye-off"}
            size={20}
            style={stylesLogin.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        </View>

        <View style={stylesLogin.linkContainer}>
          <Pressable style={stylesLogin.forgotPasswordLink} onPress={handleForgotPassword}>
            <Text style={stylesLogin.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>
        </View>
      
      
      <View style={stylesLogin.bottomButton}>
        <Pressable onPress={handleLogin} style={stylesLogin.actionButton}>
          <Text style={stylesLogin.loginText}>Login</Text>
        </Pressable>
      </View>
      <Toast config={toastConfig} />
    </View>
    </>
  );
}

export default loginComponent