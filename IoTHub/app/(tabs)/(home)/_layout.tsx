import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import { Stack } from 'expo-router'
import DeviceDetailsScreen from '../(home)/deviceId'

const LayoutHome = () => {
 
  return (
    <Stack>
        <Stack.Screen 
        name="HomeScreen" 
       
        options={{
          title:"Home",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#298ed6" },
          headerTitleAlign: "center",
          }} />
        
        <Stack.Screen 
        name="deviceId" 
       
        options={{
          title:"Device Details",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#298ed6" },
          headerTitleAlign: "center",
        }} />
        <Stack.Screen
         name ="SettingsScreen"

          options={{
            headerShown: false,
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#298ed6" },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name ="ControlScreen"
  
            options={{
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#298ed6" },
            headerTitleAlign: "center",
            }}
            />
        <Stack.Screen
         name ="TextScreen"

          options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#298ed6" },
          headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name ="Dashboard"
                      
              options={{
              headerTintColor: "#fff",
              headerStyle: { backgroundColor: "#298ed6" },
              headerTitleAlign: "center",
              }}
              />                    

        
        
    </Stack>
  )
}

export default LayoutHome