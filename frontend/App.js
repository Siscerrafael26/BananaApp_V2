import React from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import Index from "./src/screens/Index";
import ProductPage from "@screens/(tabs)/ProductPage";
import FarmerForm from "@screens/FarmerForm";
import SignUpScreen from "@screens/SignUpScreen";
import LoginScreen from "@screens/LoginScreen";
import FarmerPage from "@screens/(tabs)/FarmerPage";
import AuthScreen from "@screens/(tabs)/AuthScreen";

import ScreenNames from "@screens/ScreenNames";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContext from "./src/context/AuthContext";
import { loadUser } from "./src/service/AuthService";
import { useState, useEffect } from "react";
import { loadAllData, loadData } from "./src/service/UploadService";
const App = () => {
    const Stack = createNativeStackNavigator();
    const [user, setUser] = useState();
    const [product, setProducts] = useState();
    const [allProducts, setAllProd] = useState();
    const [refresh, setRefresh] = useState(0);
    useEffect(() => {
        async function runEffect() {
            try {
                const user = await loadUser();
                setUser(user);
                const product = await loadData(user.id);
                setProducts(product);
                const allProd = await loadAllData();
                setAllProd(allProd);
            } catch (error) {
                console.error("Failed to load Data ", error);
            }
        }
        runEffect();
        const intervalID = setInterval(() => {
            setRefresh((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, product, allProducts }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={ScreenNames.HOME_SCREEN}>
                    <Stack.Screen
                        name={ScreenNames.HOME_SCREEN}
                        component={Index}
                    />

                    <Stack.Screen
                        name={ScreenNames.FARMERFORM_SCREEN}
                        component={FarmerForm}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={ScreenNames.PRODUCT_SCREEN}
                        component={ProductPage}
                    />
                    <Stack.Screen
                        name={ScreenNames.AUTH_SCREEN}
                        component={AuthScreen}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name={ScreenNames.LOGIN_SCREEN}
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name={ScreenNames.SIGNUP_SCREEN}
                        component={SignUpScreen}
                    />

                    <Stack.Screen
                        name={ScreenNames.FARMER_SCREEN}
                        component={FarmerPage}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#f3fff3",
    },
});
export default App;
