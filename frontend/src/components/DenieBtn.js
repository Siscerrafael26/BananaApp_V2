import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { updateOrder } from "../service/OrderService";

export default DenieBtn = ({ title, product_id }) => {
    async function handleDenie() {
        try {
            const data = {
                status: "Imekataliwa",
            };
            const response = await updateOrder(data, product_id);
        } catch (error) {
            // console.log(error);
        }
    }
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
