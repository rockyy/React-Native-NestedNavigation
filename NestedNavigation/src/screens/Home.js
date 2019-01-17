import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
      title: "Home"
    }
    constructor(props){
        super(props)

    }
    gotoDetail = () => {
      this.props.navigation.navigate("HomeDetail")
    }
    render() {
      return (
        <View style={styles.container}>
         <TouchableOpacity
              onPress={() => this.gotoDetail()}>
              <View style={styles.buttonStyle}>
              <Text allowFontScaling={false} style={styles.textStyle}>{ "Detail" }</Text>
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
    textStyle: {      
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
  }
  });
  