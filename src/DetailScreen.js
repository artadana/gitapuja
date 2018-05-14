import React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class DetailScreen extends React.Component {
    static navigationOptions = {
      title: 'detail',
      headerStyle: {
        backgroundColor: "orange"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        textAlign: "center",
        alignSelf: 'center',
        flex: 1
      }
     
    };
    render() {
      const { params } = this.props.navigation.state;
      const nama = params ? params.nama : null;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Halo {JSON.stringify(nama)} apa kabar?</Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#BBDEFB',
      flex: 1,
      flexDirection: 'column'
    },
  });

