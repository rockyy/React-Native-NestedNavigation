import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HomeDetail extends Component {
    static navigationOptions = {
      title: "HomeDetail Screen"
    }
    render() {
      return (
        <View style={styles.container}>
            <Text
              style={styles.buttonText}> Home Detail
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
  