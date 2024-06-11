import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const DropDownMenu = ({ options, title }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [valueSelected, setValueSelected] = useState(title);
    const [top, setTop] = useState(0);
    const [h, setH] = useState(0);
    const [y, setY] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTop(h + y);
    }, [loaded]);

    const dropDownPressed = (selectedOption) => {
        if (isOpened) {
            if (selectedOption == "Aina ya Ndizi") {
                setIsOpened(false);
            } else {
                setValueSelected(selectedOption);
                setIsOpened(false);
            }
        } else {
            console.log(`Pressed by ${selectedOption}`);
            setIsOpened(true);
        }
    };

    const toggleMenu = () => {
        if (isOpened) {
            setIsOpened(false);
        } else {
            setIsOpened(true);
        }
    };

    const onLayout = (e) => {
        setLoaded(true);
        setH(e.nativeEvent.layout.height);
        setY(e.nativeEvent.layout.y);
    };

    const positionStyle = {
        position: "absolute",
        top: top,
    };

    const Options = () => {
        const _options = [];
        let counter = -1;

        options.forEach((option) => {
            counter += 1;

            _options.push(
                <TouchableOpacity
                    key={counter}
                    style={styles.dropDown}
                    onPress={() => {
                        dropDownPressed(option.Option);
                    }}
                    activeOpacity={0.7}
                >
                    <Text style={styles.text}>{option.Option}</Text>
                </TouchableOpacity>
            );
        });

        return _options;
    };

    return (
        <>
            <TouchableOpacity
                onLayout={onLayout}
                style={[styles.dropDown]}
                onPress={() => {
                    toggleMenu();
                }}
                activeOpacity={0.7}
            >
                <Text style={styles.text}>{valueSelected}</Text>
                {isOpened ? (
                    <AntDesign name="up" size={24} color="black" />
                ) : (
                    <AntDesign name="down" size={24} color="black" />
                )}
            </TouchableOpacity>

            {isOpened && (
                <ScrollView style={[{ height: 150 }, positionStyle]}>
                    <Options />
                </ScrollView>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    dropDown: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        height: 50,
        width: 321,
        backgroundColor: "#f3fff3",
    },
    text: {
        paddingLeft: 10,
    },
    icon: {},
});

export default DropDownMenu;
