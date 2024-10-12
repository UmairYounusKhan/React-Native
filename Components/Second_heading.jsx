import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Second_heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Second_heading</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "red",
      color: "white",
      height: 300,
      justifyContent:'center',
      alignItems:'center',
    },
    font: {
        fontSize: 30,
      }
  });




export default Second_heading