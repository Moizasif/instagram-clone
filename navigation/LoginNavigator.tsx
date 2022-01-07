import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/AuthScreens/Login';
import Signup from '../screens/AuthScreens/Signup';

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;