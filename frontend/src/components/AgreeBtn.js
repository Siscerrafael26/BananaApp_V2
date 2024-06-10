import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { updateOrder } from "../service/OrderService";

export default AgreeBtn = ({ title, product_id }) => {
    async function handleAgree() {
        try {
            const data = {
                status: "Imekubaliwa",
            };
            const response = await updateOrder(data, product_id);
            const { message } = response.data;
            setStatus(true);
        } catch (error) {
            // console.log(error);
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text
                style={styles.buttonText}
                onPress={() => handleAgree(product_id)}
            >
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
