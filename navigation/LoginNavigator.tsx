import React from 'react';
import AppLoading from 'expo-app-loading';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/AuthScreens/Login';
import Signup from '../screens/AuthScreens/Signup';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();

function App() {

  const [loaded] = useFonts({
    logofont: require('../assets/fonts/Lobster-Regular.ttf'),
    textfont: require('../assets/fonts/Handlee-Regular.ttf')
  });

    if(!loaded) { 
      return <AppLoading />
    }
    else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Signup" component={Signup} />

        </Stack.Navigator>
      </NavigationContainer>
    );
    }
  }
  
  export default App;