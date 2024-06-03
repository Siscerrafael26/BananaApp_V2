import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import CardButton from "./CardButton";

const ProductListCard = ({
    image,
    kiasi,
    title = "Add to Cart",
    beiKichane,
    ainaYaNdizi,
    showAddButton = true,
}) => {
    return (
        <View style={{ flexDirection: "row", height: 130, marginTop: 10 }}>
            <Image source={image} style={{ height: 113, width: 159 }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ marginTop: 20, marginBottom: 5 }}>
                    Aina: {ainaYaNdizi}
                </Text>
                <Text>Kiasi: {kiasi} </Text>
                <Text>Bei: {beiKichane} Tsh</Text>
                <View style={{ height: 15 }}></View>
            </View>
        </View>
    );
};

export default ProductListCard;
