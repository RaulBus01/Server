import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chart from "../../../components/chart.web";

import { Modal,TouchableOpacity } from "react-native";
import Dashboard from "./Dashboard.web";

const DeviceDetails = () => {
  const { width, height } = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBar, setSelectedBar] = useState(null);
  const [temp, setTemp] = useState(0);
  const chartData = [
    { x: 1, y: 13000 },
    { x: 2, y: 16500 },
    { x: 3, y: 14250 },
    { x: 4, y: 19000 },
    { x: 5, y: 20500 },
    { x: 6, y: 10000 },
  ];
  const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
  
      redirect: "follow"
    };
    
    
    React.useEffect(() => {
      try{
       
      }
      catch(err){
        console.log(err);
      }
    }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Chart chartData={chartData} /> */}
        <Dashboard />
      </ScrollView>
      <Text>
        
      </Text>
    </SafeAreaView>
  );
}


export default DeviceDetails;