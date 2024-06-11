import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CardAvatar from "./CardAvatar";
import AuthContext from "../context/AuthContext";
export default DataCard = ({ cardType, props }) => {
    const { farmerOrderData, baseURL } = useContext(AuthContext);
    const farmerOrder = farmerOrderData?.data?.length;
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.dataCard}>
            <CardAvatar cardType={cardType} />
            <View style={styles.card}>
                <Text style={styles.descriptionText} numberOfLines={1}>
                    {" "}
                    Jumla ya Pesa ya ndizi{" "}
                </Text>
                <Text style={styles.numberText} numberOfLines={1}>
                    {props.totalBei} Tsh
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.descriptionText} numberOfLines={1}>
                    {" "}
                    Ndizi zilizopo{" "}
                </Text>
                <Text style={styles.numberText} numberOfLines={1}>
                    {props?.data?.length}
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.descriptionText} numberOfLines={1}>
                    {" "}
                    Oda Zangu{" "}
                </Text>
                <Text style={styles.numberText} numberOfLines={1}>
                    {farmerOrder}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    dataCard: {
        height: 100,
        width: 400,
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    numberText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 2,
    },
    descriptionText: {
        fontSize: 10,
    },
    card: {
        marginLeft: 15,
        borderColor: "black",
        borderLeftWidth: 1,
        paddingLeft: 15,
    },
});
