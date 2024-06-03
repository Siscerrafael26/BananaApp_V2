import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import CardButton from "./CardButton";

const ProductCard = ({
    title = "Add to Cart",
    showAddButton = true,
    image,
    product,
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
            <Image source={image} style={{ height: 160, width: 230 }} />
            <View style={{ marginLeft: 10 }}>
                <Text>Aina: {product.aina}</Text>
                <Text>Kiasi: {product.kiasi}</Text>
                <Text>Bei: {product.bei} Tsh.</Text>
                <Text>Muuzaji: {product.user_id?.name} </Text>
                <Text>Eneo: {product.user_id?.location} </Text>
                <Text>Simu: {product.user_id?.phone} </Text>
                <View style={{ height: 15 }}></View>
                {showAddButton && <CardButton title={title} />}
            </View>
        </View>
    );
};

export default ProductCard;
