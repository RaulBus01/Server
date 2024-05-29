import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar, Card, Text, IconButton, Button, Switch, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth } from '../../../configFirebase';
import StateProvider from '../../../providers/StateProvider';



const HomeControl = () => {

 

  const [user, setUser] = React.useState('');
  const [switchStates, setSwitchStates] = React.useState({
    lights: false,
    windows: false,
    fan: false,
  });
  
  React.useEffect(() => {
    fetch('http://192.168.1.215:8081/invokeMethod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        targetDevice: 'rasbperry',
        methodName: 'get_state',
        payload: 'a'
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setSwitchStates({
        lights: data.payload.data[0] === 1,
        windows: data.payload.data[1] === 1,
        fan: data.payload.data[2] === 1,
      });


    
     
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);
  console.log(switchStates);
  React.useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUser(user.displayName);
      
      
    }
  }, []);
  

  
  const navigateTo = (screen: string) => {
    router.push({ pathname: screen });
  }
 
  const handleSwitchChange = async (endpoint:string, value:boolean) =>
    {
      
      setSwitchStates((prevState) => ({
        ...prevState,
        [endpoint]: value,
      }));
     
    }
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainContent}>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Hello, <Text style={styles.greetingName}>{user}</Text></Text>
        
          </View>
          <View style={styles.controlSection}>
          <View style={styles.temperatureControl}>
            <Text style={styles.roomTemperature}>Room Temperature</Text>
              <View style={styles.temperatureDial}>
                
                <Text style={styles.temperatureValue}>25°C</Text>
               
              </View>
            </View>
            <View style={styles.temperatureControl}>
              <Text style={styles.roomTemperature}>Room Humidity</Text>
              <View style={styles.temperatureDial}>
                  
                  <Text style={styles.temperatureValue}>92%</Text>
              </View>
              
            
            
          </View>
           
           
           
          </View>
          <ScrollView horizontal={true} >
            {[
              { icon: 'monitor-dashboard', label: 'Dashboard',screen: 'Dashboard' },
              { icon: 'text-to-speech', label: 'Speech-to-Text',screen:'TranscribeText' },
              { icon: 'home-import-outline', label: 'Back home',screen:'HomeScreen' },
            ].map((item, index) => (
              
              <Button  key={index} mode="contained" style={styles.quickActionButton} icon={item.icon}
                onPress={() => navigateTo(item.screen)}
              >
                {item.label}
              </Button>
            
            ))}
          </ScrollView>
        </View>
        <View style={styles.deviceCard}>
          <Text style={styles.deviceTitle}>Devices</Text>
          {[
            { icon:'lightbulb-on-outline',label: 'Lights', active: false, endpoint: 'lights' },
            { icon: 'window-closed-variant',label: 'Windows', active: false, endpoint: 'windows'},
            { icon:'fan', label: 'Fan', active: false, endpoint: 'fan'},
            { icon:'music-circle', label: 'Sound', active: false, endpoint: 'sound'}
          ].map((item, index) => (
            <View key={index} style={styles.devicesContainer}>
              <Icon name={item.icon || ''} size={30} color="#6200EE" />
              <List.Item
                key={index}
                title={item.label}
                right={() => (
                  <Switch
                  style={styles.switch}
                  value={switchStates[item.endpoint]}
                  onValueChange={(value) => handleSwitchChange(item.endpoint, value)}
                />
                )}
                style={styles.deviceItem}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  switch:{
    marginLeft: 10,
  },
  scrollContainer: {
    padding: 16,
  },
  mainContent: {
    marginBottom: 20,
  },
  greeting: {
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  greetingName: {
    color: '#6200EE',
  },
  roomTemperature: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  controlSection: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  temperatureControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  temperatureDial: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperatureValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modeControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
  },
  modeLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
  },
  scheduleControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scheduleLabel: {
    fontSize: 16,
    color: '#666',
  },
  scheduleValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    
    marginBottom: 20,
  },
  
  quickActionButton: {
    flex: 0.5,
    height: 60,
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 20,
  },
  deviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  devicesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deviceItem: {
    marginBottom: 10,
  },
});

export default HomeControl;
