import React, {Component} from 'react'
import {View, Text, Button, Image} from 'react-native'
import {StackActions, NavigationActions} from 'react-navigation'

class Home extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Image source={require('./LunchBoxLogo.png')}/>
          <Button
            title="Go to Details"
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Details' })
                ],
              }))
            }}
          />
          <Button
            title="Go to Nothing"
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Listings' })
                ],
              }))
            }}
          />
        </View>
      );
    }  
  }

export default Home