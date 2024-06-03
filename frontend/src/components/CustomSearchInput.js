import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const CustomSearchInput = ({onUserTyping}) => {

    const [ userInput, setUserInput ] = useState("") 

    const handleUserInput = (userInput__) => {
        onUserTyping(userInput__)
    }

    return (
        <View style={{height: 43, width: 300, flexDirection: "row", backgroundColor: "white", alignItems: "center", borderRadius: 22}}>
            <AntDesign name="search1" style={{marginLeft: 8}} size={24} color="black" />
            <TextInput style={{fontSize: 20, flex: 1,marginLeft: 5, color: "black"}} placeholder="Tafuta aina ya ndizi" value={userInput} onChangeText={(userInput_) => {setUserInput(userInput_); handleUserInput(userInput_)}}/>
        </View>
    )
}

export default CustomSearchInput;