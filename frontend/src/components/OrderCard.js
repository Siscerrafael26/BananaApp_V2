import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import ProductCard from "./ProductCard";
import CardButton from "./CardButton";

export default OrderCard = ({
  image,
  beiKichane,
  beiMkungu,
  ainaYaNdizi,
  cardText = "Recent Orders",
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{cardText}</Text>
      <ProductCard
        image={image}
        beiKichane={beiKichane}
        beiMkungu={beiMkungu}
        showAddButton={false}
        ainaYaNdizi={ainaYaNdizi}
      />
      <View style={styles.buttonWrapper}>
        <CardButton title={"Pokea"} />
        <CardButton title={"Katalia"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    padding: 10,
    paddingBottom: 15,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
	      width: 0,
	      height: 2,
        },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15
  }
});
