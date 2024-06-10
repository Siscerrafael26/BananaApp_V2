import React, { useContext, useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import AuthContext from "../context/AuthContext";
import { makeOrder } from "../service/OrderService";

export default CardButton = ({ title, props }) => {
    const [productID, setProductID] = useState(props.product_id);
    const [buyerID, setBuyerID] = useState(props.buyer_id);
    const [farmerID, setFarmerID] = useState(props.farmer_id);
    async function handleMakeOrder() {
        try {
            await makeOrder({
                buyer_id: buyerID,
                farmer_id: farmerID,
                product_id: productID,
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.buttonText} /*onPress={handleMakeOrder}*/>
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
