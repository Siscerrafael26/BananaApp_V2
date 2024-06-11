import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BuyerOrderCard from "./BuyerOrderCard";
export default OrdersCard = ({ cardText = "Oda Namba.", props, index }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>
                {cardText} {"Ki"}
                {props?.id + 1}
                {"nG"}
            </Text>
            <BuyerOrderCard props={props} index={index} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 400,
        padding: 10,
        marginTop: 10,
        paddingBottom: 15,
        borderRadius: 5,
        backgroundColor: "white",
        elevation: 5,
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
