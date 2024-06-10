import React, { useState } from "react";
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Platform,
} from "react-native";

import { CustomUserInput } from "../components/CustomUserInput";
import { BlurView } from "expo-blur";
import appColors from "@colors/appColors";
import { Ionicons } from "@expo/vector-icons";
import { signup } from "../service/AuthService";

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
            setUserType("buyer");
        } else {
            setIsFarmer(false);
            setIsBuyer(true);
            setUserType("buyer");
            setRoute("/products");
            setError(false);
        }
    }

    function selectedFarmer() {
        if (isFarmer) {
            setIsFarmer(false);
            setUserType("farmer");
        } else {
            setIsBuyer(false);
            setIsFarmer(true);
            setUserType("farmer");
            setRoute("/farmerpage");
            setError(false);
        }
    }

    const handleSignUp = async () => {
        setErrors({});
        try {
            await signup({
                name,
                email,
                password,
                location,
                phone,
                user_type: userType,
                device_name: `${Platform.OS} ${Platform.Version}`,
            });
            navigation.navigate(ScreenNames.LOGIN_SCREEN);
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
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
                        secureTextEntry={false}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        errors={errors.name}
                    />

                    <View style={{ height: 10 }}></View>
                    <CustomUserInput
                        icon="email"
                        color={appColors.appColor}
                        containerType="fontisto"
                        placeholder="Email"
                        secureTextEntry={false}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        errors={errors.email}
                    />
                    <View style={{ height: 10 }}></View>
                    <CustomUserInput
                        icon="phone"
                        color={appColors.appColor}
                        containerType="antdesign"
                        secureTextEntry={false}
                        placeholder="Phone Number"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                        errors={errors.phone}
                    />
                    <View style={{ height: 10 }}></View>
                    <CustomUserInput
                        icon="location"
                        containerType="evilicons"
                        color={appColors.appColor}
                        secureTextEntry={false}
                        placeholder="Location"
                        value={location}
                        onChangeText={(text) => setLocation(text)}
                        errors={errors.location}
                    />
                    <View style={{ height: 10 }}></View>
                    <CustomUserInput
                        icon="eye"
                        color={appColors.appColor}
                        containerType="feather"
                        secureTextEntry={true}
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        errors={errors.password}
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
