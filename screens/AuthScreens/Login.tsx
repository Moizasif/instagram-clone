import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


//typescript has no idea thats why we use this destructuring

const Login = ({navigation}: {navigation: any}) => {
   return(
       <View style={styles.container}>
           <Text>Login</Text>
           <TouchableOpacity 
           style={{backgroundColor:'black', margin:10, padding:10, borderRadius:5}}
           onPress={() => navigation.navigate('Signup')}>
               <Text style={{color:'white'}}>Go to Signup page</Text>
           </TouchableOpacity>
       </View>
   )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Login