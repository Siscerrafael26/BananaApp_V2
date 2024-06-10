import React, { useContext } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import DataCard from "@components/BuyerDataCard";
import Spacer from "@components/Spacer";
import { AntDesign } from "@expo/vector-icons";
import AuthContext from "../../context/AuthContext";
import { logout } from "../../service/AuthService";
const BuyerHomePage = ({ navigation }) => {
    const { user, setUser, buyerOrdersData } = useContext(AuthContext);

    async function handleLogout() {
        await logout();
        setUser(null);
    }
    const Cards = () => {
        const cards_ = [];
        const data = buyerOrdersData?.data;

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
                        size={24}
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
                </View>
            </View>
            <Spacer size={25} spacerType={"columnSpacer"} />
            <ScrollView>
                <View style={styles.farmerPageContents}>
                    <ScrollView style={{ height: 120 }} horizontal={true}>
                        <Cards />
                    </ScrollView>
                    <Spacer size={25} spacerType={"columnSpacer"} />
                    <Spacer size={25} spacerType={"columnSpacer"} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3fff3",
    },
    recents: {
        // width: 400,
        // height: 400,
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
        marginRight: 15,
        color: "#f0f0f0",
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
        paddingLeft: 20,
        width: 400,
    },
    headerData: {
        paddingLeft: 10,
        color: "#f3fff3",
        fontSize: 14,
    },
});

export default BuyerHomePage;
