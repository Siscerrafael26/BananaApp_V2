import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import Index from "./src/screens/Index";
import ProductPage from "@screens/(tabs)/ProductPage";
import FarmerForm from "@screens/FarmerForm";
import SignUpScreen from "@screens/SignUpScreen";
import LoginScreen from "@screens/LoginScreen";
import FarmerPage from "@screens/(tabs)/FarmerPage";
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

const App = () => {
    const Stack = createNativeStackNavigator();
    const [user, setUser] = useState();
    const [product, setProducts] = useState();
    const [allProducts, setAllProd] = useState();
    const [buyerOrdersData, setMyOrders] = useState();
    const [farmerOrderData, setFarmerOrder] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
                // console.error("Failed to load Data ", error?.response);
            }
            setLoading(false);
        };

        fetchData();

        const intervalID = setInterval(() => {
            fetchData();
        }, 10000);

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
                            {/* <Stack.Screen
                                name={ScreenNames.FARMER_SCREEN}
                                component={FarmerPage}
                                options={{ headerShown: false }}
                            /> */}
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
