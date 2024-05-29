import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'

import DeviceDetailsScreen from '../(home)/deviceId'
import ControlScreen from './ControlScreen'
import TextScreen from './TextScreen' 
import Dashboard from './Dashboard'
import TranscribeScreen from './TranscribeText'

const LayoutHome = () => {
  const Stack = createNativeStackNavigator();
 
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          title:"Home",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#298ed6" },
          headerTitleAlign: "center",
          }} />
        
        <Stack.Screen 
        name="deviceId" 
        component={DeviceDetailsScreen}
        options={{
          title:"Device Details",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#298ed6" },
          headerTitleAlign: "center",
        }} />
       
        <Stack.Screen
          name ="ControlScreen"
          component={ControlScreen}
            options={{
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#298ed6" },
            headerTitleAlign: "center",
            }}
            />
        <Stack.Screen
         name ="TextScreen"
          component={TextScreen}
          options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#298ed6" },
          headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name ="Dashboard"
          component={Dashboard}
              options={{
              headerTintColor: "#fff",
              headerStyle: { backgroundColor: "#298ed6" },
              headerTitleAlign: "center",
              }}
              />    
          <Stack.Screen
           name="TranscribeText"
           component={TranscribeScreen}
           options={{
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#298ed6" },
            headerTitleAlign: "center",
            }}
          />                

        
        
    </Stack.Navigator>
  )
}

export default LayoutHome