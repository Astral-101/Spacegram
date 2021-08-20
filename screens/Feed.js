
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TextInput} from 'react-native';

class LogIn extends Component {
  render() {
    return (
      <View style = {styles.container}>

        <View style = {styles.logoView}>

          <Image source={require('../assets/space.png')} style = {styles.logoStyle}/>

          <Image source={require('../assets/zodiac.png')} style = {styles.logoTextStyle}/>


        </View>

        <View style = {styles.inputView}>

          <TextInput 

            placeholder = {"Phone number, email, username"}

            placeholderTextColor = "black"

            style =  {styles.inputBox}
          
          />

        <TextInput 

        placeholder = {"Password"}

        placeholderTextColor = "black"

        style =  {styles.inputBox}

        />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      margin: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    logoView: {
      flexDirection: 'row',
      margin: 0.3,
      marginTop: 175
    },

    logoStyle: {
      width: 100,
      height: 100,
    },

    logoTextStyle: {
      width: 320,
      height: 80,
      padding: 40,
      
    },

    inputView: {
      margin: 0.5
    },

    inputBox: {
      borderColor: 'black',
      borderRadius: 8,
      borderWidth: 2,
      width: 420,
      textAlign: 'center',
      padding: 10,
      marginTop: 40
    }
  });

export default LogIn;