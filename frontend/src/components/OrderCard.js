import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FarmerProductCard from "./FarmerProductCard";

export default OrderCard = ({
    beiKichane,
    beiMkungu,
    ainaYaNdizi,
    cardText = "Oda ya hivi punde",
}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>{cardText}</Text>
            <FarmerProductCard
                beiKichane={beiKichane}
                beiMkungu={beiMkungu}
                showAddButton={false}
                ainaYaNdizi={ainaYaNdizi}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 400,
        padding: 10,
        paddingBottom: 15,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardText: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 15,
    },
});
