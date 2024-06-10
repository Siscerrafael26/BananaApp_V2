import React, { useContext, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Spacer from "../components/Spacer";
import * as ImagePicker from "expo-image-picker"; // If you're using Expo
import { upload } from "../service/UploadService";
import ScreenNames from "./ScreenNames";
import AuthContext from "../context/AuthContext"; // Ensure you import correctly

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
    const userID = user.id;

    const [isFocus, setIsFocus] = useState(false);
    const [kiasi, setKiasi] = useState("");
    const [bei, setBei] = useState("");
    const [aina, setAina] = useState("");
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState(null);

    async function handleImagePicker() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result);
        }
    }

    async function handleSaveProduct() {
        const formData = new FormData();
        formData.append("kiasi", kiasi);
        formData.append("user_id", userID);
        formData.append("bei", bei);
        formData.append("aina", aina);
        if (image) {
            formData.append("image", {
                uri: image.uri,
                type: "image/jpeg",
                name: "product.jpg",
            });
        }

        try {
            await upload(formData);
            navigation.navigate(ScreenNames.PRODUCT_SCREEN);
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error("Failed to upload product", error);
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
                    valueField="aina"
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
                    valueField="kiasi"
                    placeholder={!isFocus ? "Chagua kiasi ya ndizi" : "..."}
                    value={kiasi}
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
                    style={styles.imagePicker}
                    onPress={handleImagePicker}
                >
                    <Text style={styles.imagePickerText}>Chagua Picha</Text>
                </TouchableOpacity>
                {/* {image && (
                    <Image
                        source={{ uri: image.uri }}
                        style={{
                            width: 200,
                            height: 200,
                            marginTop: 10,
                            alignSelf: "center",
                        }}
                    />
                )} */}
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
                    onPress={handleSaveProduct}
                    activeOpacity={0.7}
                >
                    <Text style={{ color: "#f3fff3" }}>Hifadhi</Text>
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
    imagePicker: {
        paddingVertical: 20,
        backgroundColor: "#70c945",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 20,
    },
    imagePickerText: {
        color: "#f3fff3",
    },
});
