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
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
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
    } else if (containerType === "ionicon") {
        return <Ionicons name={name} size={24} color={color} />;
    } else {
        null;
    }
}
const TabText = ({ name, color }) => {
    return (
        <View>
            <Text
                className="font-psemibold text-xs mt-1"
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    );
};
const TabNavigator = () => {
    const { user } = useContext(AuthContext);
    const userType = user?.user_type;

    if (userType === "farmer") {
        0;
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#161622",
                    tabBarInactiveTintColor: "#FFF",
                    tabBarStyle: {
                        backgroundColor: "#70c945",
                        borderTopWidth: 1,
                        height: 80,
                    },
                }}
            >
                <Tab.Screen
                    name="Nyumbani"
                    component={FarmerPage}
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <>
                                <Icon
                                    name={focused ? "home" : "home-outline"}
                                    color={color}
                                    containerType="ionicon"
                                    size={20}
                                />
                                <TabText
                                    name="Home"
                                    color={focused ? "#161622" : "#fff"}
                                />
                            </>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Bidhaa Zangu"
                    component={ProductPage}
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <>
                                <Icon
                                    name={focused ? "search" : "search-outline"}
                                    color={color}
                                    containerType="ionicon"
                                    size={20}
                                />
                                <TabText
                                    name="Ndizi"
                                    color={focused ? "#161622" : "#fff"}
                                />
                            </>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Oda Zangu"
                    component={FarmerOrderPage}
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <>
                                <Icon
                                    name={focused ? "cart" : "cart-outline"}
                                    color={color}
                                    containerType="ionicon"
                                    size={20}
                                />
                                <TabText
                                    name="Oda"
                                    color={focused ? "#161622" : "#fff"}
                                />
                            </>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Ongeza Ndizi"
                    component={FarmerForm}
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <>
                                <Icon
                                    name={
                                        focused
                                            ? "add-circle"
                                            : "add-circle-outline"
                                    }
                                    color={color}
                                    containerType="ionicon"
                                    size={20}
                                />
                                <TabText
                                    name="Ongeza"
                                    color={focused ? "#161622" : "#fff"}
                                />
                            </>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Eneo"
                    component={LocationScreen}
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <>
                                <Icon
                                    name={focused ? "map" : "map-outline"}
                                    color={color}
                                    containerType="ionicon"
                                    size={20}
                                />
                                <TabText
                                    name="Eneo"
                                    color={focused ? "#161622" : "#fff"}
                                />
                            </>
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    } else {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#161622",
                    tabBarInactiveTintColor: "#FFF",
                    tabBarStyle: {
                        backgroundColor: "#70c945",
                        borderTopWidth: 1,
                        height: 60,
                    },
                }}
            >
                <Tab.Screen
                    name="Nyumbani"
                    component={FarmerPage}
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <>
                                <Icon
                                    name={focused ? "home" : "home-outline"}
                                    color={color}
                                    containerType="ionicon"
                                    size={20}
                                />
                                <TabText
                                    name="Home"
                                    color={focused ? "#161622" : "#fff"}
                                />
                            </>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Ndizi"
                    component={ProductPageList}
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <>
                                <Icon
                                    name={focused ? "list-sharp" : "list-sharp"}
                                    color={color}
                                    containerType="ionicon"
                                    size={20}
                                />
                                <TabText
                                    name="Ndizi"
                                    color={focused ? "#161622" : "#fff"}
                                />
                            </>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Bidhaa Nilizo Oda"
                    component={OrderPage}
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <>
                                <Icon
                                    name={focused ? "cart" : "cart-outline"}
                                    color={color}
                                    containerType="ionicon"
                                    size={20}
                                />
                                <TabText
                                    name="Oda"
                                    color={focused ? "#161622" : "#fff"}
                                />
                            </>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Location"
                    component={LocationScreen}
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <>
                                <Icon
                                    name={focused ? "map" : "map-outline"}
                                    color={color}
                                    containerType="ionicon"
                                    size={20}
                                />
                                <TabText
                                    name="Eneo"
                                    color={focused ? "#161622" : "#fff"}
                                />
                            </>
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
};

export default TabNavigator;
