import React, { useContext } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AuthContext from "../context/AuthContext";

const FarmerProductCard = ({ image }) => {
    const { farmerOrderData } = useContext(AuthContext);
    const orders = farmerOrderData?.data[0];
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
                <Text>Aina: {orders?.product_id?.aina}</Text>
                <Text>Kiasi: {orders?.product_id?.kiasi}</Text>
                <Text>Bei: {orders?.product_id?.bei} Tsh.</Text>
                <Text>Mnunuzi: {orders?.buyer_id?.name} </Text>
                <Text>Eneo: {orders?.buyer_id?.location} </Text>
                <Text>Simu: {orders?.buyer_id?.phone} </Text>
                <View style={{ height: 15 }}></View>
                <Text
                    style={
                        orders?.status === "Inasubiria"
                            ? style.pending
                            : orders?.status === "Imekubaliwa"
                            ? style.success
                            : style.rejected
                    }
                >
                    Hali: {orders?.status}{" "}
                </Text>
            </View>
        </View>
    );
};
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
export default FarmerProductCard;
