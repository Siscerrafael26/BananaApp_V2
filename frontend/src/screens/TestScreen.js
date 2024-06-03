import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TestScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1, backgroundColor: "teal", justifyContent: "center", alignItems: "center"}}>
            <TouchableOpacity onPress={() => {navigation.navigate('test1')}}><Text>Hello there!!</Text></TouchableOpacity>
        </View>
    );
}

export default TestScreen;