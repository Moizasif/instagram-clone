import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Signup = ({navigation}: {navigation: any}) => {
   return(
       <View style={styles.container}>
           <Text>Signup</Text>
           <TouchableOpacity 
           style={{backgroundColor:'black', margin:10, padding:10, borderRadius:5}}
           onPress={() => navigation.navigate('Login')}>
               <Text style={{color:'white'}}>Go to Login page</Text>
           </TouchableOpacity>
       </View>
   )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Signup