import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TestScreen1 = ({ navigation }) => {
    return (
        <View style={{flex: 1, backgroundColor: "blue", justifyContent: "center", alignItems: "center"}}>
            <TouchableOpacity onPress={() => {navigation.navigate('test')}}><Text>Hello there!!</Text></TouchableOpacity>
        </View>
    );
}

export default TestScreen1;