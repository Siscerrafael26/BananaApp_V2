import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PieChart from "react-native-pie-chart";
import StatisticsKeyCard from "./StatisticsKeyCard";
import Spacer from "./Spacer";
//import Svg, { Circle, Rect } from 'react-native-svg';

export default StatisticsCard = () => {
  const widthAndHeight = 250;
  const series = [25, 15, 30, 20];
  const sliceColor = ["#70c945", "#7F5AF0", "#E53170", "#FF8906"];

  const dummyData = [
    {
      "id": "ertvd",
      "aina": "Mshare",
      "idadi": "12,500",
      "asilimia": "25",
      "rangi": "#70c945",
    },
    {
      "id": "ertd",
      "aina": "Malindi",
      "idadi": "13,000",
      "asilimia": "15",
      "rangi": "#7F5AF0",
    },
    {
      "id": "ertvd1",
      "aina": "Matoke",
      "idadi": "11,950",
      "asilimia": "30",
      "rangi": "#E53170",
    },
    {
      "id": "ertvd22",
      "aina": "Uganda",
      "idadi": "9,850",
      "asilimia": "20",
      "rangi": "#FF8906",
    },
  ];

  const Keys = () => {
    const _keys = [];

    dummyData.forEach((data) => {
      _keys.push(
        <StatisticsKeyCard
          key={data.id}
          rangi={data.rangi}
          ainaYaNdizi={data.aina}
          idadiYaNdizi={data.idadi}
          asilimia={data.asilimia}
        />
      );
    });

    return _keys;
  };

  return (
    <View style={styles.statisticsCard}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
        <Text style={[styles.text, { fontSize: 25 }]}>Ndizi Zilizouzwa</Text>
        <Text style={styles.text}>January ^</Text>
      </View>
      <Spacer size={15} spacerType={"columnSpacer"} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        />
      </View>
      <Spacer size={10} spacerType={"columnSpacer"} />
      <Text style={styles.text}>Jumla Ya Ndizi Zilizouzwa: 50,000</Text>
      <Keys />
    </View>
  );
};

const styles = StyleSheet.create({
  statisticsCard: {
    height: 700,
    width: 370,
    backgroundColor: "white",
    marginBottom: 50,
    elevation: 5,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    shadowOpacity: 0.25
  },
  text: {
    height: 30,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
