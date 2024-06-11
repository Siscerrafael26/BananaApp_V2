import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import Index from "./src/screens/Index";
import FarmerForm from "@screens/FarmerForm";
import SignUpScreen from "@screens/SignUpScreen";
import LoginScreen from "@screens/LoginScreen";
import AuthScreen from "@screens/(tabs)/AuthScreen";
import LoadingScreen from "@screens/LoadingScreen";
import ScreenNames from "@screens/ScreenNames";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContext from "./src/context/AuthContext";
import { getBuyerOrder, getFarmerOrder } from "./src/service/OrderService";
import { loadAllData, loadData } from "./src/service/UploadService";
import { loadUser } from "./src/service/AuthService";
import OrderPage from "./src/screens/OrderPage";
import useProduct from "./src/hooks/useProduct";
import { baseURL } from "./src/utils/axios";

const App = () => {
    const Stack = createNativeStackNavigator();
    const [user, setUser] = useState();
    const [product, setProducts] = useState();
    const [allProducts, setAllProd] = useState();
    const [buyerOrdersData, setMyOrders] = useState();
    const [farmerOrderData, setFarmerOrder] = useState();
    const [loading, setLoading] = useState(true);
    const getAppUrl = baseURL;
    const fetchData = async () => {
        try {
            const user = await loadUser();
            setUser(user);
            const product = await loadData(user?.id);
            setProducts(product);
            const allProd = await loadAllData();
            setAllProd(allProd);
            const buyerOrders = await getBuyerOrder(user?.id);
            setMyOrders(buyerOrders);
            const farmerOrder = await getFarmerOrder(user?.id);
            setFarmerOrder(farmerOrder);
        } catch (error) {
            Alert.alert("Error", error.response.data.message);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
        const intervalID = setInterval(() => {
            fetchData();
        }, 2000);
        return () => {
            clearInterval(intervalID);
        };
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <AuthContext.Provider
            value={{
                buyerOrdersData,
                product,
                user,
                setUser,
                allProducts,
                farmerOrderData,
                loading,
                baseURL: getAppUrl,
            }}
        >
            <NavigationContainer>
                <Stack.Navigator initialRouteName={ScreenNames.HOME_SCREEN}>
                    {user ? (
                        <>
                            <Stack.Screen
                                name={ScreenNames.AUTH_SCREEN}
                                component={AuthScreen}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name={ScreenNames.CARD_BUTN}
                                component={Index}
                            />
                            <Stack.Screen
                                name={ScreenNames.ORDER_SCREEN}
                                component={OrderPage}
                            />
                            <Stack.Screen
                                name={ScreenNames.FARMERFORM_SCREEN}
                                component={FarmerForm}
                                options={{ headerShown: false }}
                            />
                        </>
                    ) : (
                        <>
                            <Stack.Screen
                                name={ScreenNames.LOGIN_SCREEN}
                                component={LoginScreen}
                            />
                            <Stack.Screen
                                name={ScreenNames.SIGNUP_SCREEN}
                                component={SignUpScreen}
                            />
                        </>
                    )}
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
