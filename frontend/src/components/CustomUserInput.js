import React, { useState } from "react";

import { TextInput, View, StyleSheet, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function Icon({ containerType, name, color }) {
    if (containerType === "antdesign") {
        return (
            <AntDesign
                name={name}
                size={20}
                color={color}
                style={{ marginRight: 2 }}
            />
        );
    } else if (containerType === "fontisto") {
        return (
            <Fontisto
                name={name}
                size={20}
                color={color}
                style={{ marginRight: 2 }}
            />
        );
    } else if (containerType === "entypo") {
        return <Entypo name={name} size={24} color={color} />;
    } else if (containerType === "evilicons") {
        return <EvilIcons name={name} size={24} color={color} />;
    } else if (containerType === "feather") {
        return <Feather name={name} size={24} color={color} />;
    } else {
        null;
    }
}

export const CustomUserInput = ({
    containerType,
    icon,
    color,
    placeholder,
    value,
    onChangeText,
    keyboardType,
    secureTextEntry,
    errors,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <>
            <View style={[styles.container]}>
                <Icon name={icon} containerType={containerType} color={color} />
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    onFocus={() => {}}
                    value={value}
                    onBlur={() => {}}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                />
            </View>
            {errors?.map((item, index) => {
                return (
                    <Text key={index} style={styles.errors}>
                        {item}
                    </Text>
                );
            })}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginBottom: 4,
    },
    textInput: {
        flexGrow: 1,
        marginTop: 4,
        marginLeft: 10,
    },
    errors: {
        color: "red",
        marginTop: 2,
    },
});
