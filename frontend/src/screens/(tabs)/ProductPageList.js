import React, { useContext, useState } from "react";
import { View, ScrollView } from "react-native";
import CustomSearchInput from "@components/CustomSearchInput";
import ProductCard from "@components/ProductCard";
import appColors from "@colors/appColors";
import AuthContext from "../../context/AuthContext";

const ProductList = ({ filterText }) => {
    const { allProducts, user, baseURL } = useContext(AuthContext);
    const data = allProducts?.data;

    const length = filterText.length;
    const products_ = [];

    if (length < 1) {
        data?.forEach((element, index) => {
            products_.push(
                <ProductCard
                    key={index}
                    product={element}
                    user={user}
                    image={baseURL}
                />
            );
        });
    } else {
        data.forEach((element, index) => {
            if (element?.aina?.includes(filterText)) {
                products_.push(
                    <ProductCard
                        key={index}
                        product={element}
                        user={user}
                        image={baseURL}
                    />
                );
            }
        });
    }

    return products_;
};

const ProductPageList = () => {
    const [filterText, setFilterText] = useState("");
    const { allProducts, baseURL } = useContext(AuthContext);
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
