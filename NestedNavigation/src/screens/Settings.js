import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Settings extends Component {
    static navigationOptions = {
      title: "Settings"
    }
    render() {
      return (
        <View style={styles.container}>
            <Text
              style={styles.buttonText}>Settings Screen
            </Text>
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
    }
  });
  