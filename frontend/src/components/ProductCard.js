import React from "react";
import { View, Image, Text } from "react-native";
import CardButton from "./CardButton";

const ProductCard = ({
    title = "Weka Oda",
    showAddButton = true,
    image,
    product,
    user,
    navigation,
}) => {
    return (
        <View
            style={{
                flexDirection: "row",
                height: 140,
                marginTop: 20,
                marginBottom: 50,
                paddingLeft: 10,
            }}
        >
            <Image source={image} style={{ height: 110, width: 160 }} />
            <View style={{ marginLeft: 10 }}>
                <Text>Aina: {product?.aina}</Text>
                <Text>Kiasi: {product?.kiasi}</Text>
                <Text>Bei: {product?.bei} Tsh.</Text>
                <Text>Muuzaji: {product?.user_id?.name} </Text>
                <Text>Eneo: {product?.user_id?.location} </Text>
                <Text>Simu: {product?.user_id?.phone} </Text>
                <View style={{ height: 15 }}></View>
                {showAddButton && (
                    <CardButton
                        title={title}
                        props={{
                            product_id: product?.id,
                            farmer_id: product?.user_id?.id,
                            buyer_id: user?.id,
                            navigation,
                        }}
                    />
                )}
            </View>
        </View>
    );
};

export default ProductCard;
