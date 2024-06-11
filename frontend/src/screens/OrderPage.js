import React, { useContext } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import AuthContext from "../context/AuthContext";
import OrdersCard from "../components/OrdersCard";

const OrderPage = () => {
    const { buyerOrdersData } = useContext(AuthContext);
    const orders = buyerOrdersData?.data;
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
            }}
        >
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#F3FFF3",
                    marginBottom: 30,
                }}
            >
                {orders.map((item, index) => (
                    <OrdersCard key={index} props={item} index={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default OrderPage;
