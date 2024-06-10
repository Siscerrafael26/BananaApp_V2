import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FarmerPage from "./FarmerPage";
import BuyerHomePage from "./BuyerHomePage";
import LocationScreen from "./LocationScreen";
import ProductPage from "./ProductPage";
import { useContext } from "react";
import ProductPageList from "./ProductPageList";
import OrderPage from "../OrderPage";
import FarmerOrderPage from "../FarmerOrderPage";
import AuthContext from "../../context/AuthContext";
import FarmerForm from "../FarmerForm";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
function Icon({ containerType, name, color }) {
    if (containerType === "antdesign") {
        return (
            <AntDesign
                name={name}
                size={20}
                color={color}
                style={{ marginRight: 2 }}
            />
        );
    } else if (containerType === "fontisto") {
        return (
            <Fontisto
                name={name}
                size={20}
                color={color}
                style={{ marginRight: 2 }}
            />
        );
    } else if (containerType === "entypo") {
        return <Entypo name={name} size={24} color={color} />;
    } else if (containerType === "evilicons") {
        return <EvilIcons name={name} size={24} color={color} />;
    } else if (containerType === "feather") {
        return <Feather name={name} size={24} color={color} />;
    } else {
        null;
    }
}
const TabNavigator = () => {
    const { user } = useContext(AuthContext);
    const userType = user?.user_type;

    if (userType === "farmer") {
        0;
        return (
            <Tab.Navigator>
                <Tab.Screen name="Nyumbani" component={FarmerPage} />
                <Tab.Screen name="Bidhaa Zangu" component={ProductPage} />
                <Tab.Screen name="Oda Zangu" component={FarmerOrderPage} />
                {/* <Tab.Screen name="Ongeza Ndizi" component={FarmerForm} /> */}
                <Tab.Screen name="Eneo" component={LocationScreen} />
            </Tab.Navigator>
        );
    } else {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Nyumbani" component={BuyerHomePage} />
                <Tab.Screen name="Ndizi" component={ProductPageList} />
                <Tab.Screen name="Bidhaa Nilizo Oda" component={OrderPage} />
                <Tab.Screen name="Location" component={LocationScreen} />
            </Tab.Navigator>
        );
    }
};

export default TabNavigator;
