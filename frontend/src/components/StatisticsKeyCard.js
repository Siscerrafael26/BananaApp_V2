import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Spacer from "./Spacer";

export default StatisticsKeyCard = ({ rangi, ainaYaNdizi, idadiYaNdizi, asilimia }) => {
  return (
      <View style={styles.statisticsKeyCard}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
        <View style={{backgroundColor: rangi, width: 20, height: 20, borderRadius: 10}}></View>
        <Spacer size={10} spacerType={"rowSpacer"}/>
        <Text style={{color: "#A6ACBE"}}>{ainaYaNdizi}</Text>
        </View>
        <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>{idadiYaNdizi}</Text>
        <Spacer size={5} spacerType={"rowSpacer"}/>
        <Text style={{color: "#A6ACBE"}}>{`${asilimia}%`}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  statisticsKeyCard: {
    height: 60,
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center" 
  },
});
