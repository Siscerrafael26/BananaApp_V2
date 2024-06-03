import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenNames from "../ScreenNames";
import FarmerPage from "./FarmerPage";
import CartScreen from "./CartScreen";
import LocationScreen from "./LocationScreen";
import ProductPage from "./ProductPage";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import ProductPageList from "./ProductPageList";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const { user } = useContext(AuthContext);
    const userType = user?.user_type;

    if (userType === "farmer") {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Nyumbani" component={FarmerPage} />
                <Tab.Screen name="Bidhaa Zangu" component={ProductPage} />
                <Tab.Screen name="Eneo" component={LocationScreen} />
            </Tab.Navigator>
        );
    } else {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Ndizi" component={ProductPageList} />
                <Tab.Screen name="Cart" component={CartScreen} />
                <Tab.Screen name="Location" component={LocationScreen} />
            </Tab.Navigator>
        );
    }
};

export default TabNavigator;
