import React, { useContext, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Spacer from "../components/Spacer";
import { upload } from "../service/UploadService";
import ScreenNames from "./ScreenNames";
import AuthContext from "../context/AuthContext";
const ainaNdizi = [
    { label: "Malindi", aina: "Malindi" },
    { label: "Bukoba", aina: "Bukoba" },
    { label: "Mshare", aina: "Mshare" },
    { label: "Matoke", aina: "Matoke" },
    { label: "Uganda", aina: "Uganda" },
    { label: "Malindi", aina: "Malindi" },
    { label: "Bukoba", aina: "Bukoba" },
    { label: "Mshare", aina: "Mshare" },
    { label: "Matoke", aina: "Matoke" },
    { label: "Uganda", aina: "Uganda" },
];

const kiasiNdizi = [
    { label: "Mkungu", kiasi: "Mkungu" },
    { label: "Kichane", kiasi: "Kichane" },
];

const FarmerForm = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    const userID = user.id;

    // console.log(userID);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [kiasi, setKiasi] = useState("");
    const [bei, setBei] = useState("");
    const [aina, setAina] = useState("");
    const [userid, setUserID] = useState("");
    const [errors, setErrors] = useState(null);

    async function handleSaveProduct() {
        try {
            await upload({
                kiasi,
                user_id: userID,
                bei,
                aina,
            });
            navigation.navigate(ScreenNames.PRODUCT_SCREEN);
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                        paddingVertical: 10,
                    }}
                >
                    Ongeza bidhaa mpya
                </Text>
                <Text style={styles.menuTitle}>Aina ya ndizi</Text>
                <Dropdown
                    style={[
                        styles.dropdown,
                        isFocus && { borderColor: "#70c945" },
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={ainaNdizi}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? "Chagua aina ya ndizi" : "..."}
                    value={aina}
                    onChangeText={(text) => setAina(text)}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                        setAina(item.aina);
                        setIsFocus(false);
                    }}
                />
                {errors && (
                    <Text style={{ color: "red", marginTop: 2 }}>
                        {errors.aina}
                    </Text>
                )}
                <Spacer size={10} spacerType={"columnSpacer"} />

                <Text style={styles.menuTitle}>Bei ya ndizi</Text>
                <TextInput
                    style={styles.textInput}
                    value={bei}
                    onChangeText={(text) => setBei(text)}
                />
                {errors && (
                    <Text style={{ color: "red", marginTop: 2 }}>
                        {errors.bei}
                    </Text>
                )}

                <Text style={styles.menuTitle}>Kiasi ya ndizi</Text>
                <Dropdown
                    style={[
                        styles.dropdown,
                        isFocus && { borderColor: "#70c945" },
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={kiasiNdizi}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? "Chagua aina ya ndizi" : "..."}
                    value={aina}
                    onChangeText={(text) => setKiasi(text)}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                        setKiasi(item.kiasi);
                        setIsFocus(false);
                    }}
                />
                {errors && (
                    <Text style={{ color: "red", marginTop: 2 }}>
                        {errors.kiasi}
                    </Text>
                )}
                <TouchableOpacity
                    style={{
                        paddingVertical: 20,
                        width: 150,
                        backgroundColor: "#70c945",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 25,
                        marginTop: 20,
                        alignSelf: "center",
                    }}
                    activeOpacity={0.7}
                >
                    <Text
                        style={{ color: "#f3fff3" }}
                        onPress={handleSaveProduct}
                    >
                        Hifadhi
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FarmerForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3fff3",
    },
    formContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        marginHorizontal: 20,
        borderRadius: 15,
        marginTop: 50,
    },
    dropdown: {
        height: 50,
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    menuTitle: {
        paddingVertical: 10,
        fontSize: 16,
    },
    textInput: {
        height: 50,
        borderRadius: 8,
        borderWidth: 0.5,
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: "gray",
    },
});
