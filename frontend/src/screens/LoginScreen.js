import React, { useContext, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Platform,
} from "react-native";
import LoadingScreen from "@screens/LoadingScreen";
import { BlurView } from "expo-blur";
import { CustomUserInput } from "@components/CustomUserInput";
import appColors from "@colors/appColors";
import ScreenNames from "@screens/ScreenNames";
import { login, loadUser } from "../service/AuthService";
import AuthContext from "../context/AuthContext";
const LoginScreen = ({ navigation }) => {
    // setting the email and password from inputs
    const [email, setEmail] = useState("");
    const [password, setPaswword] = useState("");
    // setting the errors associated with the input and authentication
    const [errors, setErrors] = useState({});
    const { setUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    async function handleLogin() {
        setErrors({});
        try {
            setIsLoading(true);
            await login({
                email,
                password,
                device_name: `${Platform.OS} ${Platform.Version}`,
            });
            const myUser = await loadUser();
            setUser(myUser);
            myUser ? navigation.navigation(ScreenNames.AUTH_SCREEN) : "";
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setIsLoading(false);
        }
    }
    if (isLoading) {
        return <LoadingScreen />;
    }
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={require("@assets/Bgimg.png")}
        >
            <BlurView
                intensity={50}
                experimentalBlurMethod="dimezisBlurView"
                style={style.blurView}
            >
                <View>
                    <Text style={{ fontSize: 25, textAlign: "center" }}>
                        LOGIN
                    </Text>
                    <View style={{ height: 30 }}></View>
                    <CustomUserInput
                        icon="user"
                        color={appColors.appColor}
                        containerType="antdesign"
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                        errors={errors.email}
                    />
                    <View style={{ height: 10 }}></View>
                    <CustomUserInput
                        icon="lock"
                        color={appColors.appColor}
                        containerType="feather"
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => setPaswword(text)}
                        errors={errors.password}
                    />
                </View>

                <View style={{ height: 20 }}></View>

                <TouchableOpacity
                    style={style.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={{ color: "white" }}>LOGIN</Text>
                </TouchableOpacity>

                <View style={{ height: 40 }}></View>

                <TouchableOpacity
                    style={style.button}
                    onPress={() => {
                        navigation.navigate(ScreenNames.SIGNUP_SCREEN);
                    }}
                >
                    <Text style={{ color: "black", borderBottomWidth: 1 }}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </BlurView>
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    button: {
        backgroundColor: "transparent",
        height: 40,
        width: 150,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    loginButton: {
        backgroundColor: appColors.appColor,
        height: 40,
        width: 150,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    blurView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        opacity: 1,
    },
});
export default LoginScreen;
