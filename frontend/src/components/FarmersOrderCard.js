import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FarmerOrder from "../components/FarmerOrder";
import AgreeBtn from "./AgreeBtn";
import DenieBtn from "./DenieBtn";

export default FarmersOrderCard = ({ cardText = "Oda ya", props, index }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>
                {cardText} {props?.buyer_id?.name}
            </Text>
            {/* <Text>{JSON.stringify(props?.id, "", 2)}</Text> */}
            <FarmerOrder
                image={
                    props.product_id.kiasi === "Kichane"
                        ? require("@assets/Banana1.jpg")
                        : require("@assets/banana9.jpg")
                }
                props={props}
                index={index}
            />
            <View style={styles.buttonWrapper}>
                <AgreeBtn title={"Kubali Oda"} product_id={props?.id} />
                <DenieBtn title={"Kataa Oda"} product_id={props?.id} />
            </View>
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
