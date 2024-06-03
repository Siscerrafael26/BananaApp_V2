import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

const Loading = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#70c945",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    height: 500,
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <Text> Loading ...</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 280,
        borderRadius: 20,
    },
});

export default Loading;
