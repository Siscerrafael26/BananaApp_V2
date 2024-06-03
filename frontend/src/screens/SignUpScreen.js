import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Box,
    Image,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import ScreenNames from "@screens/ScreenNames";

import { CustomUserInput } from "../components/CustomUserInput";
import { BlurView } from "expo-blur";
import { Fontisto } from "@expo/vector-icons";
import appColors from "@colors/appColors";
import { Ionicons } from "@expo/vector-icons";

const SignUpScreen = ({ navigation }) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isFarmer, setIsFarmer] = useState(false);
    const [route, setRoute] = useState("");
    const [error, setError] = useState(false);
    // signup states
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [userType, setUserType] = useState("");
    function selectedBuyer() {
        if (isBuyer) {
            setIsBuyer(false);
        } else {
            setIsFarmer(false);
            setIsBuyer(true);
            setRoute("/products");
            setError(false);
        }
    }

    function selectedFarmer() {
        if (isFarmer) {
            setIsFarmer(false);
        } else {
            setIsBuyer(false);
            setIsFarmer(true);
            setRoute("/farmerpage");
            setError(false);
        }
    }

    const handleSignUp = () => {
        setErrors({});
        try {
        } catch (error) {
            console.error(error);
        }
        // if (isBuyer) {
        //     navigation.navigate(ScreenNames.PRODUCT_SCREEN);
        // } else if (isFarmer) {
        //     navigation.navigate(ScreenNames.FARMER_SCREEN);
        // } else {
        //     setError(true);
        // }
    };

    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={require("@assets/Bgimg.png")}
        >
            <BlurView
                intensity={50}
                experimentalBlurMethod="dimezisBlurView"
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    opacity: 1,
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 25,
                            paddingLeft: 10,
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        SIGN UP
                    </Text>
                    <View style={{ height: 30 }}></View>
                    <CustomUserInput
                        icon="user"
                        containerType="antdesign"
                        color={appColors.appColor}
                        placeholder="Full Name"
                        // value={}
                    />

                    <View style={{ height: 10 }}></View>
                    <CustomUserInput
                        icon="email"
                        color={appColors.appColor}
                        containerType="fontisto"
                        placeholder="Email"
                    />
                    <View style={{ height: 10 }}></View>
                    <CustomUserInput
                        icon="phone"
                        color={appColors.appColor}
                        containerType="antdesign"
                        placeholder="PhoneNumber"
                    />
                    <View style={{ height: 10 }}></View>
                    <CustomUserInput
                        icon="location"
                        containerType="evilicons"
                        color={appColors.appColor}
                        placeholder="Location"
                    />
                    <View style={{ height: 10 }}></View>
                    <CustomUserInput
                        icon="eye"
                        color={appColors.appColor}
                        containerType="feather"
                        placeholder="Password"
                    />
                    <View style={{ height: 10 }}></View>
                </View>

                <View
                    style={{
                        height: 30,
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{ flexDirection: "row", alignItems: "center" }}
                        onPress={() => {
                            selectedFarmer();
                        }}
                    >
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: isFarmer ? "#70c945" : "black",
                            }}
                        >
                            {isFarmer && (
                                <Ionicons
                                    name="checkmark-outline"
                                    size={24}
                                    color={isFarmer ? "#70c945" : "black"}
                                />
                            )}
                        </View>
                        <Text style={{ marginLeft: 5 }}>Farmer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 50,
                        }}
                        onPress={() => {
                            selectedBuyer();
                        }}
                    >
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: isBuyer ? "#70c945" : "black",
                            }}
                        >
                            {isBuyer && (
                                <Ionicons
                                    name="checkmark-outline"
                                    size={24}
                                    color={isBuyer ? "#70c945" : "black"}
                                />
                            )}
                        </View>
                        <Text style={{ marginLeft: 5 }}>Buyer</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 40 }}>
                    {error && (
                        <Text style={{ color: "red", paddingTop: 5 }}>
                            Please select either buyer or farmer.
                        </Text>
                    )}
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: appColors.appColor,
                        height: 40,
                        width: 150,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => {
                        handleSignUp();
                    }}
                >
                    <Text style={{ color: "white" }}>SIGN UP</Text>
                </TouchableOpacity>

                <View style={{ height: 40 }}></View>

                <TouchableOpacity
                    style={{
                        backgroundColor: "transparent",
                        height: 40,
                        width: 250,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            color: "black",
                            fontWeight: "bold",
                            borderBottomWidth: 1,
                        }}
                    ></Text>
                </TouchableOpacity>
            </BlurView>
        </ImageBackground>
    );
};
export default SignUpScreen;
