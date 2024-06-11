import { TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import { updateOrder } from "../service/OrderService";
import { useState } from "react";
import LoadingScreen from "@screens/LoadingScreen";
export default DenieBtn = ({ title, product_id }) => {
    const [loading, setLoading] = useState(false);
    async function handleDenie() {
        try {
            setLoading(true);
            const data = {
                status: "Imekataliwa",
            };
            const response = await updateOrder(data, product_id);
            setLoading(true);
        } catch (error) {
            Alert.alert("Error", error.response.data.message);
        } finally {
            setLoading(false);
        }
    }
    if (loading)
        return (
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    color: "#70c945",
                }}
            >
                Loading ...
            </Text>
        );
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.buttonText} onPress={handleDenie}>
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
