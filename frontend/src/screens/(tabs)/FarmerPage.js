import React, { useContext, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Alert,
} from "react-native";
import DataCard from "@components/DataCard";
import OrderCard from "@components/OrderCard";
import Spacer from "@components/Spacer";
import StatisticsCard from "@components/StatisticsCard";
import { AntDesign } from "@expo/vector-icons";
import AuthContext from "../../context/AuthContext";
import { logout } from "../../service/AuthService";
import LoadingScreen from "@screens/LoadingScreen";

const FarmerPage = ({ navigation }) => {
    const { user, product, setUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    async function handleLogout() {
        try {
            setIsLoading(true);
            await logout();
            setUser(null);
        } catch (error) {
            Alert.alert("Error", error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    }

    const Cards = () => {
        const cards_ = [];
        const data = product?.data;
        const totalBei = data?.reduce(
            (acc, item) => acc + parseInt(item.bei, 10),
            0
        );
        const cardIds = ["1"];
        cardIds.forEach((id) => {
            cards_.push(
                <View key={id}>
                    <DataCard cardType={"total"} props={{ totalBei, data }} />
                </View>
            );
        });

        return cards_;
    };
    if (isLoading) {
        return <LoadingScreen />;
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topHeader}>
                <View style={styles.iconsTop}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.iconUser}
                    >
                        <FontAwesome6 name="user" size={23} color="#000" />
                    </TouchableOpacity>
                    <AntDesign
                        name="logout"
                        style={styles.logout}
                        size={26}
                        color="black"
                        onPress={handleLogout}
                    />
                </View>
                <View style={styles.WrapperForIconAndTxt}>
                    <View>
                        <Text style={styles.headerData}>
                            Jina: Bw/Bi {user.name}
                        </Text>
                        <Text style={styles.headerData}>
                            Simu Nambari: {user.phone}
                        </Text>
                        <Text style={styles.headerData}>
                            Eneo: {user.location}
                        </Text>
                        <Text style={styles.headerData}>
                            Aina: {user.user_type}
                        </Text>
                    </View>
                    {/* <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.uploadButton}
                    >
                        <FontAwesome6
                            name="add"
                            size={23}
                            color="black"
                            onPress={() => {
                                navigation.navigate(
                                    ScreenNames.FARMERFORM_SCREEN
                                );
                            }}
                        />
                    </TouchableOpacity> */}
                </View>
            </View>
            <Spacer size={25} spacerType={"columnSpacer"} />
            <ScrollView>
                <View style={styles.farmerPageContents}>
                    <ScrollView style={{ height: 120 }} horizontal={true}>
                        <Cards />
                    </ScrollView>
                    <Spacer size={25} spacerType={"columnSpacer"} />
                    <OrderCard style={styles.recents} />
                    <Spacer size={25} spacerType={"columnSpacer"} />
                    <StatisticsCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3fff3",
        marginTop: 22,
    },
    topHeader: {
        justifyContent: "flex-end",
        backgroundColor: "#70c945",
        height: 150,
        borderBottomRightRadius: 21,
        borderBottomLeftRadius: 21,
    },
    headerText: {
        color: "#f3fff3",
        fontSize: 18,
    },
    iconsTop: {
        marginTop: 7,
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    uploadButton: {
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: "#f3fff3",
    },
    logout: {
        justifyContent: "center",
        alignItems: "center",
        height: 27,
        width: 27,
        borderRadius: 15,
        backgroundColor: "#f3fff3",
        marginRight: 15,
    },
    iconUser: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: "#f3fff3",
        marginLeft: 20,
    },
    WrapperForIconAndTxt: {
        flexDirection: "row",
        marginBottom: 7,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: "space-between",
    },
    farmerPageContents: {
        paddingLeft: 5,
        width: 420,
    },
    headerData: {
        paddingLeft: 10,
        color: "#f3fff3",
        fontSize: 14,
    },
});

export default FarmerPage;
