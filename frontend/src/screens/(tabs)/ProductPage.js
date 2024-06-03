import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import CustomSearchInput from "@components/CustomSearchInput";
import ProductListCard from "@components/ProductListCard";
import appColors from "@colors/appColors";
import AuthContext from "../../context/AuthContext";

const ProductList = ({ filterText }) => {
    const length = filterText.length;
    const products_ = [];
    const { product } = useContext(AuthContext);
    const data = product?.data;
    if (length < 1) {
        data?.forEach((element, index) => {
            products_.push(
                <ProductListCard
                    key={index}
                    image={
                        element.kiasi === "Kichane"
                            ? require("@assets/Banana1.jpg")
                            : require("@assets/banana9.jpg")
                    }
                    beiKichane={element.bei}
                    kiasi={element.kiasi}
                    ainaYaNdizi={element.aina}
                />
            );
        });
    } else {
        data?.forEach((element, index) => {
            if (element?.aina?.includes(filterText)) {
                products_.push(
                    <ProductListCard
                        key={index}
                        image={
                            element.kiasi === "Kichane"
                                ? require("@assets/Banana1.jpg")
                                : require("@assets/banana9.jpg")
                        }
                        beiKichane={element.bei}
                        beiMkungu={element.bei}
                        ainaYaNdizi={element.aina}
                    />
                );
            }
        });
    }

    return products_;
};

const ProductPage = () => {
    const [filterText, setFilterText] = useState("");

    return (
        <>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        height: 143,
                        backgroundColor: appColors.appColor,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CustomSearchInput
                        onUserTyping={(e) => {
                            setFilterText(e);
                        }}
                    />
                </View>
                <ScrollView style={{ flex: 1, backgroundColor: "#F3FFF3" }}>
                    <ProductList filterText={filterText} />
                </ScrollView>
            </View>
        </>
    );
};

export default ProductPage;
