import React from 'react';
import { Button, View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: '',
      headerStyle: {
        backgroundColor: "#CC3300"
        
      },
      headerTintColor: "white",
      headerTitleStyle: {
        textAlign: "center",
        alignSelf: 'center',
        flex: 1
      }

    };
    render() {
      return (
          
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#CC3300" }}>       
           <Image source={require('./1.png')} 
         style={{width: 260,height: 310,margin: 50}}
         /> 

              {/* <TouchableOpacity
                  activeOpacity = { 0.5 }
                  style = { styles.TouchableOpacityStyle }
                  onPress = { this.props.navigation.navigate('Home') }>

                    <Text style = { styles.TextStyle }>Gita Puja</Text>

                </TouchableOpacity> */}


           <Button 
            title="Gita Puja"
            color="#red"
            onPress={() => this.props.navigation.navigate('Home')}
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

