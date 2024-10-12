import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  
  const navigation = useNavigation(); 

  const handleChange = () => {
    navigation.navigate('Signup');
  }
  const handleLogin=()=>{
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput style={styles.input} placeholder='Enter Your Email' placeholderTextColor='#666' />
      <TextInput style={styles.input} placeholder='Enter Your Password' placeholderTextColor='#666' secureTextEntry={true} />
      <Text onPress={handleChange} style={styles.link}>Have no Account? Sign Up here.</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text onPress={handleLogin} style={styles.button}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',  // Center horizontally
    padding: 20,
    backgroundColor: '#f5f5f5'  // Light background color
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,  // Space below heading
    color: '#333',  // Darker color for text
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,  // Space between inputs
    backgroundColor: '#fff',  // White background for inputs
    borderRadius: 8,  // Rounded corners for inputs
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',  // Shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,  // Elevation for Android shadow
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#1E90FF',  // Vibrant blue button
    borderRadius: 8,
    paddingVertical: 15,  // Vertical padding for button height
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
  },
  button: {
    textAlign: 'center',
    color: '#fff',  // White text on button
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    color: '#1E90FF',  // Match link color with button
    fontSize: 14,
    textDecorationLine: 'underline',  // Underline link
  }
});
