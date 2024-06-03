import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CardAvatar from "./CardAvatar";

export default DataCard = ({ cardType, props }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.dataCard}>
            <CardAvatar cardType={cardType} />
            <View style={{ marginLeft: 15 }}>
                <Text style={styles.numberText} numberOfLines={1}>
                    {props.totalBei} Tsh
                </Text>
                <Text style={styles.descriptionText} numberOfLines={1}>
                    {" "}
                    Jumla ya Pesa ya ndizi{" "}
                </Text>
            </View>
            <View style={{ marginLeft: 15 }}>
                <Text style={styles.numberText} numberOfLines={1}>
                    {props.data.length}
                </Text>
                <Text style={styles.descriptionText} numberOfLines={1}>
                    {" "}
                    Ndizi zilizopo{" "}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    dataCard: {
        height: 100,
        width: 380,
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    numberText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 2,
    },
    descriptionText: {
        fontSize: 10,
    },
});
