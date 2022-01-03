import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export const Task = ({ todo }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.firstContent}>
        <View style={styles.square}></View>
        <Text style={styles.title}>{todo}</Text>
      </View>
      <View style={styles.dot}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  firstContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },

  square: {
    width: 25,
    height: 25,
    backgroundColor: "#55bcf6",
    borderRadius: 5,
    marginRight: 15,
    opacity: 0.5,
  },

  title: {
    fontSize: 18,
    maxWidth: "78%",
  },

  dot: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginLeft: "auto",
    borderWidth: 2,
    borderColor: "#55bcf6",
    borderStyle: "dashed",
  },
});
