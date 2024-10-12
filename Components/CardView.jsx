import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Cards from "./Cards";
// import Cards from "./Components/Cards";

const CardView = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setStories(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.heading}>API Cards</Text>
        {stories.map((story) => (
          <Cards
            key={story.id}
            title={story.title}
            body={story.description}
            imageUrl={story.image} 
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f0f0f0",
  },
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color:'red'
  },
});

export default CardView;
