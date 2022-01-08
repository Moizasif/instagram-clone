import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , TextInput, Dimensions} from 'react-native';


const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const Login = () => {
   return(
       <View style={styles.container}>
         <Text style={styles.logo}>Instagram</Text>
          <View style={styles.mainview}>
           <View style={styles.label}>
                <Text style={styles.labelText}>Email</Text>
           </View>
           <TextInput 
           style={styles.textinput}
           placeholderTextColor={'grey'}
           placeholder='example@example.com'/>
           <View style={styles.label}>
                <Text style={styles.labelText}>Password</Text>
           </View>
            <TextInput 
           style={styles.textinput}
           placeholderTextColor={'grey'}
           placeholder='Passcode123'/>
         </View>

         <View style={styles.mainview2}>
           <TouchableOpacity style={styles.touch1}>
                  <Text style={styles.touch1text}>LOGIN</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.touch2}>
             <Text style={styles.touch2text1}>Don't have an account? </Text> 
             <Text style={styles.touch2text2}>Signup!</Text>
           </TouchableOpacity>
           </View>
           <View style={styles.bottomview}>
           <Text style={styles.bottomviewtext1}>from</Text>
           <Text style={styles.bottomviewtext2}>Moiz</Text>
           </View>
            
           
       </View>
   )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    logo:{
      fontSize:40 ,
       fontFamily:'logofont',
        marginVertical:50
    },
    mainview:{
      marginTop:100
    },
    label:{
      width:screenWidth*0.9 ,
      marginTop:10
    },
    labelText :{
      left:15
    },
    textinput: {
      height: 50,
      width: screenWidth*0.9,
      color: 'black',
      paddingHorizontal: 20,
      borderRadius: 10,
      borderColor: 'grey',
      borderWidth: 1  
    },
    mainview2:{
      width:screenWidth,
      justifyContent:'center',
      alignItems:'center',
      margin:30
    },
    touch1:{
      width:screenWidth*0.6,
      height:50,
      borderRadius: 30,
      backgroundColor:'#0095f6' ,
      justifyContent:'center', 
      alignItems:'center' 
    },
    touch1text:{
      color:'white', 
      fontWeight:'bold',
      fontSize:18
    },
    touch2:{
      alignItems:'center',
      flexDirection:"row",
      margin:10
    },
    touch2text1:{
      fontSize:18
    },
    touch2text2:{
      fontSize:18,
      fontWeight:'bold', 
      color:"#0095f6"
    },
    bottomview:{
      position:'absolute',
      bottom:60 ,
      justifyContent:'center', 
      alignItems:'center'
    },
    bottomviewtext1:{
      fontSize:18
    },
    bottomviewtext2:{
      fontSize:20,
      fontWeight:'bold',
    }

  });

export default Login