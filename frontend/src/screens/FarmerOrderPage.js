import React, { useContext } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import FarmersOrderCard from "../components/FarmersOrderCard";
import AuthContext from "../context/AuthContext";
import LoadingScreen from "@screens/LoadingScreen";
const OrderPage = () => {
    const { farmerOrderData } = useContext(AuthContext);
    const orders = farmerOrderData?.data;

    return (
        <SafeAreaView
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <ScrollView style={{ flex: 1, backgroundColor: "#F3FFF3" }}>
                {orders?.map((item, index) => (
                    <FarmersOrderCard key={index} props={item} index={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default OrderPage;
