import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Profile from "./Screens/Profile";

const App = () => {


  const Stack = createStackNavigator();

  return (
    <>
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen options={{headerShown:""}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown:""}} name="Signup" component={Signup} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    </NavigationContainer>
     
    </>
  );
};


export default App;
