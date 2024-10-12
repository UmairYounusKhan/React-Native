import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
  const navigation = useNavigation();

  const handleLoginNavigation = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <TextInput style={styles.input} placeholder='Enter Your Name' placeholderTextColor='#666' />
      <TextInput style={styles.input} placeholder='Enter Your Email' placeholderTextColor='#666' />
      <TextInput style={styles.input} placeholder='Enter Your Password' placeholderTextColor='#666' secureTextEntry={true} />
      <TextInput style={styles.input} placeholder='Confirm Your Password' placeholderTextColor='#666' secureTextEntry={true} />
      <Text onPress={handleLoginNavigation} style={styles.link}>Already have an account? Login here.</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
  },
  button: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    color: '#1E90FF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
