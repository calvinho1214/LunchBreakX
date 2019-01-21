import React, { Component } from 'react';
import { Text, Button, SafeAreaView} from 'react-native';
import {Location, Permissions} from 'expo'
import {StackActions, NavigationActions} from 'react-navigation';
import MapEx from './MapEx'
import YelpService from './yelp'

export default class Details extends Component {
  state = {
    region:null,
    restaurants: []
  }

  getRestaurants = async () => {
    const {latitude, longitude} = this.state.region
    const userLocation = {latitude, longitude}
    const restaurants = await YelpService.getRestaurants(userLocation)
    this.setState({ restaurants })
  }

  componentWillMount(){
    this.getLocationAsync()
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if(status !== 'granted') {
      this.setState({
        errorMessage: 'Permission for location was denied'
      })
      await this.getRestaurants()
    }

  let location = await Location.getCurrentPositionAsync({})
  const region = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.0252,
	  longitudeDelta: 0.0251
  }
  await this.setState({region})
  }
  render() {
    const {region, restaurants} = this.state
    return (
      <SafeAreaView>
        <MapEx
        region={region}
        places={restaurants}
        />
        <Text>Hey</Text>
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
        </SafeAreaView>
    )
  }  
}