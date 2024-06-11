import React, { useContext } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AuthContext from "../context/AuthContext";

const MyProducts = ({ image, bei, kiasi, ainaYaNdizi }) => {
    const { farmerOrderData } = useContext(AuthContext);
    const orders = farmerOrderData?.data[0];
    return (
        <View
            style={{
                flexDirection: "row",
                height: 140,
                marginTop: 20,
            }}
        >
            <Image
                source={{ uri: image }}
                style={{ height: 110, width: 160 }}
            />
            <View style={{ height: 15 }}></View>
            <View style={{ marginLeft: 10 }}>
                <Text>Aina: {ainaYaNdizi}</Text>
                <View style={{ height: 15 }}></View>
                <Text>Kiasi: {kiasi}</Text>
                <View style={{ height: 15 }}></View>
                <Text>Bei: {bei} Tsh.</Text>
                <View style={{ height: 15 }}></View>
            </View>
        </View>
    );
};

export default MyProducts;
