import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
      title: "Login"
    }
    login = () => {
      this.props.navigation.navigate("TabNavigator",{param:null})
    }
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity
              onPress={() => this.login()}>
              <View style={styles.buttonStyle}>
              <Text allowFontScaling={false} style={styles.loginStyle}>{ "Login" }</Text>
              </View>
          </TouchableOpacity>
        </View>
      );
    }
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    buttonStyle: {
      height: 50,
      width:200,
      marginTop: 30,
      marginHorizontal: 20,
      justifyContent: 'center',
      backgroundColor: 'blue',
      alignItems: 'center'
    },
    loginStyle: {      
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
  },
  });