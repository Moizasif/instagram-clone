import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, updateUsername } from '../../actions/user'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const Signup = (props) => {

   const [repeat, setRepeat] = useState('');
   
   const onLoginPress = () => {
     if(props.user.password === repeat) {
       alert('the passcode are identical')
     }else{
       alert('password are different')
     }
   }

   return(
       <View style={styles.container}>
           <Image source={require('../../assets/backgrounds/robin.jpg')} style={{ position:'absolute',zIndex:-1, width:screenWidth, height:screenHeight}}/>
           <View>
           <View style={styles.label}>
                <Text style={styles.labelText}>Name</Text>
           </View>
           <TextInput 
           style={styles.textinput}
           placeholderTextColor={'grey'}
           placeholder='your username'
           onChangeText={input=>props.updateEmail(input)}
           value={props.user.email}/>
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
            <View style={styles.label}>
                <Text style={styles.labelText}>Repeat password</Text>
           </View>
            <TextInput 
           style={styles.textinput}
           placeholderTextColor={'grey'}
           placeholder='Repeat Passcode123'
           onChangeText={input=>setRepeat(input)}
           value={repeat}/>

           
           
         </View>
         <TouchableOpacity 
           style={styles.touch1}
           onPress={() => onLoginPress()}>
                  <Text style={styles.touch1text}>SIGN UP</Text>
           </TouchableOpacity>
       </View>
   )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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
    touch1:{
      width:screenWidth*0.6,
      height:50,
      borderRadius: 30,
      backgroundColor:'#0095f6' ,
      justifyContent:'center', 
      alignItems:'center',
      margin:30 
    },
    touch1text:{
      color:'white', 
      fontWeight:'bold',
      fontSize:18
    }
  });

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateEmail, updatePassword, updateUsername }, dispatch)
  }
  const mapStateToProps = (state) => {
    return{
      user: state.user,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Signup)