import React, { useContext } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import FarmersOrderCard from "../components/FarmersOrderCard";
import AuthContext from "../context/AuthContext";
import LoadingScreen from "@screens/LoadingScreen";
const OrderPage = () => {
    const { farmerOrderData, baseURL } = useContext(AuthContext);
    const orders = farmerOrderData?.data;

    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
            }}
        >
            <ScrollView style={{ flex: 1, marginTop: 20, marginBottom: 20 }}>
                {orders?.map((item, index) => (
                    <FarmersOrderCard
                        key={index}
                        props={item}
                        index={index}
                        baseURL={baseURL}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default OrderPage;
