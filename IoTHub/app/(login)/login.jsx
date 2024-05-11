import { View, Text, Pressable} from 'react-native'
import React from 'react'
import {stylesLogin} from './loginStyles'

import LoginComponent from './loginComponent';
import RegisterComponent from './registerComponent';
import { SafeAreaView } from 'react-native-safe-area-context';




const LoginScreen = () => {


   
    const [isFocused, setIsFocused] = React.useState({login:true,register:false});

  return (
    <SafeAreaView style={stylesLogin.container}>
    
        <View style={stylesLogin.buttonContainer}>
          <Pressable style={isFocused.login ? stylesLogin.buttonLeftActive: stylesLogin.buttonLeft} onPress={()=>setIsFocused({login:true,register:false})}>
              <Text style={stylesLogin.buttonText}>Login</Text>
          </Pressable>
          <Pressable style={isFocused.register ? stylesLogin.buttonRightActive : stylesLogin.buttonRight} onPress={() => setIsFocused({login: false, register: true})}>
              <Text style={stylesLogin.buttonText}>Register</Text>
          </Pressable>
        </View>
       
        {isFocused.login ? <LoginComponent/>: isFocused.register ? <RegisterComponent/> : null}
      
      


       
      
    </SafeAreaView>
 
  );
  
}


export default LoginScreen