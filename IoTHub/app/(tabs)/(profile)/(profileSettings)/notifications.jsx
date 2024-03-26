import { View, Text,Switch,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const Notifications = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      
      <View style={styles.topButtons}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContent}> 
            <Ionicons style={styles.icons} name="notifications" size={24} color="black" />
            <Text>Push Notifications</Text>
          </View>
          <View style={styles.switch}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled} />
            </View>
          </View>
      </View>
      
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "aliceblue",
      paddingTop: 10,
      textAlign: 'center',
      width: '100%',
  },
  topButtons: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
  },
  buttonContainer:{
    borderRadius: 10,
    height: '10%',
    width: '75%',
    paddingLeft: 20,
    alignItems: 'center', 
    justifyContent: 'space-between',   
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  buttonContent:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch:{
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '5%',
  },
  icons:{
    marginRight: 10,
  }
  
})
export default Notifications