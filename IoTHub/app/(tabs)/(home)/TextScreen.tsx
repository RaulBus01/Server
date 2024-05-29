import { View, Text } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';

const TextScreen = () => {
    const params = useLocalSearchParams();
    const {text} = params;
    console.log(params);
    return (
        <View>
            {text && <Text>{text}</Text>}
        </View>
    );
};

export default TextScreen;
