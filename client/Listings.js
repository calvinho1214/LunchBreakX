import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

class Listings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Listings</Text>
        <Image source={require('./world-home.png')}/>
        <Button 
        title="Go back to the Home"
        onPress={() => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home' })
            ],
          }))
        }}
        />
      </View>
    );
  }  
}
export default Listings