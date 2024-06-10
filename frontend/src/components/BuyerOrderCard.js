import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const BuyerOrderCard = ({ image, props }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                height: 160,
                marginTop: 20,
            }}
        >
            <Image source={image} style={{ height: 110, width: 160 }} />

            <View style={{ marginLeft: 10 }}>
                <Text>Aina: {props?.product_id?.aina}</Text>
                <Text>Kiasi: {props?.product_id?.kiasi}</Text>
                <Text>Bei: {props?.product_id?.bei} Tsh.</Text>
                <Text>Muuzaji: {props?.product_id?.user_id?.name} </Text>
                <Text>Eneo: {props?.product_id?.user_id?.location} </Text>
                <Text>Simu : {props?.product_id?.user_id?.phone} </Text>
                <View style={{ height: 15 }}></View>
                <Text
                    style={
                        props?.status === "Inasubiria"
                            ? style.pending
                            : props?.status === "Imekubaliwa"
                            ? style.success
                            : style.rejected
                    }
                >
                    Hali: {props?.status}{" "}
                </Text>
            </View>
        </View>
    );
};

export default BuyerOrderCard;
const style = StyleSheet.create({
    pending: {
        color: "orange",
        fontWeight: "700",
    },
    success: {
        color: "green",
        fontWeight: "900",
    },
    rejected: {
        color: "red",
        fontWeight: "600",
    },
});
