import React, { useContext, useState } from "react";
import { View, ScrollView } from "react-native";
import CustomSearchInput from "@components/CustomSearchInput";
import ProductCard from "@components/ProductCard";
import appColors from "@colors/appColors";
import AuthContext from "../../context/AuthContext";

const ProductList = ({ filterText }) => {
    const { allProducts, user } = useContext(AuthContext);
    const data = allProducts?.data;

    const length = filterText.length;
    const products_ = [];

    if (length < 1) {
        data?.forEach((element, index) => {
            products_.push(
                <ProductCard
                    key={index}
                    image={
                        element.kiasi === "Kichane"
                            ? require("@assets/Banana1.jpg")
                            : require("@assets/banana9.jpg")
                    }
                    product={element}
                    user={user}
                />
            );
        });
    } else {
        data.forEach((element, index) => {
            if (element?.aina?.includes(filterText)) {
                products_.push(
                    <ProductCard
                        key={index}
                        image={
                            element.kiasi === "Kichane"
                                ? require("@assets/Banana1.jpg")
                                : require("@assets/banana9.jpg")
                        }
                        product={element}
                    />
                );
            }
        });
    }

    return products_;
};

const ProductPageList = () => {
    const [filterText, setFilterText] = useState("");
    const { allProducts } = useContext(AuthContext);
    const data = allProducts?.data;
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

export default ProductPageList;
