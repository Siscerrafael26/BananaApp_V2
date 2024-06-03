import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import CartObject from "../../components/CartObject";
import { BlurView } from "expo-blur";

const CartScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    height: 100,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                }}
            >
                <Text style={{ fontSize: 30 }}>Your Cart</Text>
            </View>
            <ScrollView>
                <CartObject ainaYaKipimo={"Kichane"} />
                <CartObject />
                <CartObject />
                <CartObject ainaYaKipimo={"Kichane"} />
                <CartObject />
                <CartObject />
                <CartObject ainaYaKipimo={"Kichane"} />
                <CartObject />
                <CartObject />
                <CartObject />
                <CartObject />
                <CartObject />
            </ScrollView>
            <BlurView
                intensity={50}
                experimentalBlurMethod="dimezisBlurView"
                style={{
                    height: 100,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    borderRadius: 15,
                    opacity: 1,
                }}
            >
                <Text
                    style={{
                        marginLeft: 30,
                        fontSize: 20,
                        fontWeight: "bold",
                        letterSpacing: 4,
                    }}
                >
                    Total:{" "}
                </Text>
                <Text style={{ marginRight: 73 }}>200,000Tsh</Text>
            </BlurView>
        </View>
    );
};

export default CartScreen;
