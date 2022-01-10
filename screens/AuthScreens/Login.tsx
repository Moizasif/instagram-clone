import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , TextInput, Dimensions, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword } from '../../actions/user'


const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const Login = (props) => {
   return(
       <View style={styles.container}>
         <Image source={require('../../assets/backgrounds/nordwood.jpg')} style={{ position:'absolute',zIndex:-1, width:screenWidth, height:screenHeight}}/>
         <Text style={styles.logo}>Instagram</Text>
          <View style={styles.mainview}>
           <View style={styles.label}>
                <Text style={styles.labelText}>Email</Text>
           </View>
           <TextInput 
           style={styles.textinput}
           placeholderTextColor={'grey'}
           placeholder='example@example.com'
           onChangeText={input=>props.updateEmail(input)}
           value={props.user.email}/>
           <View style={styles.label}>
                <Text style={styles.labelText}>Password</Text>
           </View>
            <TextInput 
           style={styles.textinput}
           placeholderTextColor={'grey'}
           placeholder='Passcode123'
           onChangeText={input=>props.updatePassword(input)}
           value={props.user.password}/>
         </View>

         <View style={styles.mainview2}>
           <TouchableOpacity 
           style={styles.touch1}
           onPress={() => alert(props.user.email)}>
                  <Text style={styles.touch1text}>LOGIN</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           style={styles.touch2}
           onPress={()=> props.navigation.navigate('Signup')}
           >
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
      marginVertical:60
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
      top:650 ,
      bottom: 60,
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


  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateEmail, updatePassword }, dispatch)
  }
  const mapStateToProps = (state) => {
    return{
      user: state.user,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login)