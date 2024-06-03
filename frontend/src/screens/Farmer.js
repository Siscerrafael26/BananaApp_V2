import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Farmer = () => {
  return (
    <View style={styles.container}>
      <Text>farmer's screen</Text>
      <View style={styles.header}>
        <View style={styles.input}>
          <TextInput
            placeholder="search prices,ets.."
            style={{ width: "80%", fontSize: 20 }}
            cursorColor={"#000"}
          />
          <TouchableOpacity style={styles.searchIcon}>
            <EvilIcons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            bottom: 12,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              color: "#rgba(0,0,0,0.8)",
            }}
          >
            Farmers' dashboard
          </Text>
          <TouchableOpacity
            style={{
              padding: 2,
              backgroundColor: "rgba(0,0,0,0.2)",
              borderRadius: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              width: 40,
            }}
          >
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <Text>main</Text>
      </View>
      <View style={styles.footer}>
        <Text>main</Text>
      </View>
    </View>
    // TODO:design home ui section,upload banana details from the dashboard,
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: "#f3fff3",
    padding: 8,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "20%",
    backgroundColor: "#fff",
    flexDirection: "column",
    borderRadius: 16,
    marginTop: 24,
    position: "relative",
    paddingHorizontal: 8,
    elevation: 4,
    resizeMode: "contain",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "60%",
    backgroundColor: "#dedede",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "20%",
    // backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#f0f0f0",
    borderRadius: 50,
    height: 48,
    marginBottom: 36,
  },
  searchIcon: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 50,
    height: 36,
    width: 36,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Farmer;
