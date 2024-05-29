import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar, Card, Text, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AirConditionerControl = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topSection}>
          <Icon name="air-conditioner" size={80} color="#fff" />
        </View>
        <View style={styles.controlSection}>
          {[
            { label: 'Temp Mode', value: 'Cold', icon: 'snowflake' },
            { label: 'Temperature', value: '25°C', icon: 'thermometer' },
            { label: 'Timer', value: '2 Hours', icon: 'timer' },
          ].map((item, index) => (
            <Card key={index} style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Icon name={item.icon} size={24} color="#007AFF" />
                <Text style={styles.cardLabel}>{item.label}</Text>
                <Text style={styles.cardValue}>{item.value}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>
        <View style={styles.temperatureSection}>
          <Text style={styles.temperatureValue}>25°C</Text>
          <View style={styles.temperatureControl}>
            <TouchableOpacity>
              <Icon name="power" size={40} color="#FF3B30" />
            </TouchableOpacity>
          </View>
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
  scrollContainer: {
    
    alignItems: 'center',
  },
topSection: {
  backgroundColor: '#007AFF',
  width: '100%',
  alignItems: 'center',
  paddingVertical: 20,

  marginBottom: 20,
},
  controlSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '30%',
    borderRadius: 10,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  cardValue: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperatureSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  temperatureValue: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  temperatureControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cool: {
    fontSize: 16,
    color: '#007AFF',
    marginRight: 20,
  },
  heat: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 20,
  },
  bottomControlSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  bottomControlButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 3,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    elevation: 10,
  },
  navigationButton: {
    alignItems: 'center',
  },
});

export default AirConditionerControl;
