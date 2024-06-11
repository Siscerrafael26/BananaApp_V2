import React, { useContext, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    Alert,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import LoadingScreen from "@screens/LoadingScreen";
import Spacer from "../components/Spacer";
import { upload } from "../service/UploadService";
import ScreenNames from "./ScreenNames";
import AuthContext from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import * as DocumentPicker from "expo-document-picker";
const ainaNdizi = [
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
    const userID = user?.id;
    const [errors, setErrors] = useState({});
    const [isFocus, setIsFocus] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [imagePR, setImage] = useState(null);
    const [form, setForm] = useState({
        kiasi: "",
        user_id: userID,
        bei: "",
        aina: "",
        image: null,
    });

    async function handleSaveProduct() {
        setErrors({});
        try {
            setUploading(true);
            const res = await upload(form);
            Alert.alert("Ndizi Ime Ongezwa", "Umefanikiwa kuongeza ndizi");
        } catch (error) {
            setUploading(false);
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                Alert.alert("Error ", error.response?.data?.message);
            }
        } finally {
            setUploading(false);
            setForm({
                kiasi: "",
                user_id: userID,
                bei: "",
                aina: "",
                image: null,
            });
        }
    }
    if (uploading) {
        return <LoadingScreen />;
    }
    const openPicker = async (selectType) => {
        const result = await DocumentPicker.getDocumentAsync({
            type:
                selectType === "image"
                    ? ["image/png", "image/jpeg"]
                    : ["video/gif", "video/mp4"],
        });
        if (!result.canceled) {
            setImage(result.assets[0]);
            setForm({ ...form, image: result.assets[0] });
        } else {
            setTimeout(() => {
                Alert.alert(
                    "Image Picked",
                    "Hakikisha ume chagua picha na unaiona kwenye kibox chini baada ya kuchagua"
                );
            }, 100);
        }
    };
    // console.log(imagePR);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.formContainer}>
                <View style={styles.view}>
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
                        valueField="aina"
                        placeholder={!isFocus ? "Chagua aina ya ndizi" : "..."}
                        value={form.aina}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(item) => {
                            setForm({ ...form, aina: item.aina });
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
                        value={form.bei}
                        onChangeText={(text) => setForm({ ...form, bei: text })}
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
                        valueField="kiasi"
                        placeholder={!isFocus ? "Chagua kiasi ya ndizi" : "..."}
                        value={form.kiasi}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(item) => {
                            setForm({ ...form, kiasi: item.kiasi });
                            setIsFocus(false);
                        }}
                    />
                    {errors && (
                        <Text style={{ color: "red", marginTop: 2 }}>
                            {errors.kiasi}
                        </Text>
                    )}
                    {!imagePR && (
                        <TouchableOpacity style={styles.uploadBtn}>
                            <Text
                                onPress={() => openPicker("image")}
                                style={{ color: "#f3fff3" }}
                            >
                                Chagua Picha Ya bidhaa
                            </Text>
                        </TouchableOpacity>
                    )}
                    {errors && (
                        <Text style={{ color: "red", marginTop: 2 }}>
                            {errors?.image}
                        </Text>
                    )}
                    {imagePR && (
                        <TouchableOpacity
                            style={styles.imagePicker}
                            onPress={() => openPicker("image")}
                        >
                            <Image
                                source={imagePR}
                                style={{
                                    width: 300,
                                    height: 200,
                                    alignSelf: "center",
                                }}
                            />
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity
                        style={{
                            paddingVertical: 20,
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 25,
                            marginTop: 20,
                            alignSelf: "center",
                            opacity: `${uploading ? 0.5 : 10}`,
                            backgroundColor: `${uploading ? "red" : "#70c945"}`,
                        }}
                        onPress={handleSaveProduct}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={{
                                color: "#f3fff3",
                            }}
                            disabled={uploading}
                        >
                            Hifadhi
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FarmerForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3fff3",
        height: "100%",
    },
    uploadBtn: {
        paddingVertical: 20,
        width: "100%",
        backgroundColor: "#70c945",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 20,
        alignSelf: "center",
    },
    view: {
        marginBottom: 50,
    },
    formContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        marginHorizontal: 20,
        borderRadius: 15,
        marginTop: 50,
        marginBottom: 50,
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
    imagePicker: {
        paddingVertical: 1,
        backgroundColor: "#70c945",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
});
