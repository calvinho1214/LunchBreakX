import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, MapView } from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import MapEx from './MapEx'

export default class Details extends Component {
  constructor() {
    super();
 }
  render() {
    return (
      <View>
        <MapEx/>
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
    )
  }  
}