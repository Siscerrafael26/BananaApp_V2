import React, { useContext, useState } from "react";
import { View, ScrollView } from "react-native";
import CustomSearchInput from "@components/CustomSearchInput";
import MyProducts from "@components/MyProducts";
import appColors from "@colors/appColors";
import AuthContext from "../../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductList = ({ filterText }) => {
    const length = filterText.length;
    const products_ = [];
    const { product, baseURL } = useContext(AuthContext);
    const data = product?.data;
    if (length < 1) {
        data?.forEach((element, index) => {
            products_.push(
                <MyProducts
                    key={index}
                    image={baseURL + element?.image}
                    bei={element?.bei}
                    kiasi={element?.kiasi}
                    ainaYaNdizi={element?.aina}
                />
            );
        });
    } else {
        data?.forEach((element, index) => {
            if (element?.aina?.includes(filterText)) {
                products_.push(
                    <MyProducts
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
            <SafeAreaView style={{ flex: 1, marginTop: 5 }}>
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
                <ScrollView
                    style={{
                        flex: 1,
                        backgroundColor: "#F3FFF3",
                        marginLeft: 12,
                        marginRight: 12,
                    }}
                >
                    <ProductList filterText={filterText} />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default ProductPage;
