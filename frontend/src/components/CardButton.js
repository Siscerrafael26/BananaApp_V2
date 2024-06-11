import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import { makeOrder } from "../service/OrderService";
import ScreenNames from "@screens/ScreenNames";
import LoadingScreen from "@screens/LoadingScreen";
export default CardButton = ({ title, props, navigation }) => {
    const [productID, setProductID] = useState(props.product_id);
    const [buyerID, setBuyerID] = useState(props.buyer_id);
    const [farmerID, setFarmerID] = useState(props.farmer_id);
    const [loading, setLoading] = useState(false);
    async function handleMakeOrder() {
        try {
            setLoading(true);
            await makeOrder({
                buyer_id: buyerID,
                farmer_id: farmerID,
                product_id: productID,
            });
            navigation.replace(ScreenNames.ORDER_SCREEN);
        } catch (error) {
            Alert.alert("Error", error.response.data.message);
        } finally {
            setLoading(false);
        }
    }
    if (loading) {
        return <LoadingScreen />;
    }
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.buttonText} onPress={handleMakeOrder}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 100,
        backgroundColor: "#70c945",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
    },
    buttonText: {
        color: "white",
    },
});
