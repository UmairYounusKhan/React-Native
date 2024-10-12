import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Cards = ({ title, body, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image  source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    color: 'black',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '90%',  
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover", 
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "black"
  },
  body: {
    marginTop: 10,
    fontSize: 16,
    color: "black"
  },
});

export default Cards;
