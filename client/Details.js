import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

class Details extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Test Route</Text>
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
export default Details