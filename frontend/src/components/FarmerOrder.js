import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const FarmerOrder = ({ image, props }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                height: 160,
                marginTop: 20,
            }}
        >
            <Image
                source={{ uri: image + props?.product_id?.image }}
                style={{ height: 110, width: 160 }}
            />

            <View style={{ marginLeft: 10 }}>
                <Text>Aina: {props?.product_id?.aina}</Text>
                <Text>Kiasi: {props?.product_id?.kiasi}</Text>
                <Text>Bei: {props?.product_id?.bei} Tsh.</Text>
                <Text>Mnunuzi: {props?.buyer_id?.name} </Text>
                <Text>Eneo: {props?.buyer_id?.location} </Text>
                <Text>Simu : {props?.buyer_id?.phone} </Text>
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

export default FarmerOrder;
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
