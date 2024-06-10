import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default CardAvatar = ({ cardType }) => {
    const Icon = () => {
        if (cardType == "total") {
            return (
                <MaterialCommunityIcons
                    name={"vector-arrange-above"}
                    size={24}
                    color="#f3fff3"
                />
            );
        }
        return (
            <MaterialCommunityIcons
                name={"transit-connection-horizontal"}
                size={24}
                color="#f3fff3"
            />
        );
    };

    return (
        <View style={styles.cardAvatar}>
            <Icon />
        </View>
    );
};

const styles = StyleSheet.create({
    cardAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#70c945",
        justifyContent: "center",
        alignItems: "center",
    },
});
