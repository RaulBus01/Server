
import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native';
const loadingScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '"#298ed6"',
    },
  });

    const App = () => (
      
        <ActivityIndicator size="large" />
     
    );
    return (
      <View style={styles.container}>
        <App />
      </View>
    )
  
    
    
}
    
export default loadingScreen