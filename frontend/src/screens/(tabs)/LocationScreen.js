import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";

const LocationScreen = () => {
    const [location, setLocation] = useState({});
    const mapRef = React.createRef();
    const [isFullScreen, setIsFullScreen] = useState(true);

    const goToMyLocation = async () => {
        mapRef.current.animateCamera({
            center: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            },
        });
    };

    const toggleFullScreenMap = () => {
        if (isFullScreen) {
            setIsFullScreen(false);
        } else {
            setIsFullScreen(true);
        }
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
            }

            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced,
                enableHighAccuracy: true,
                timeInterval: 5,
            });
            setLocation(location);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                pinColor="teal"
                ref={mapRef}
                showsUserLocation={true}
                style={[styles.map, { height: isFullScreen ? "100%" : "50%" }]}
            />
            {!isFullScreen && (
                <TouchableOpacity
                    onPress={() => {
                        goToMyLocation();
                    }}
                    activeOpacity={0.7}
                    style={{
                        backgroundColor: "teal",
                        height: 60,
                        width: 200,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text>Show my location</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity
                onPress={() => {
                    toggleFullScreenMap();
                }}
                style={{
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "#70c945",
                    position: "absolute",
                    top: 10,
                    left: 60,
                }}
            >
                <Entypo name="resize-full-screen" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
    },
});

export default LocationScreen;
