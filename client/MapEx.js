import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import { MapView } from "expo";
// import MapView from 'react-native-maps'

const Marker = MapView.Marker
export default class MapEx extends Component{
        componentDidMount(){
          navigator.geolocation.getCurrentPosition((position) => {
            let lat = parseFloat(position.coords.latitude)
            let long= parseFloat(position.coords.longitude)
    
            let initialRegion = {
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.0150,
                longitudeDelta: 0.0150
            }
            this.setState({initialPosition: initialRegion})
          })
        }

        renderMarkers(){
            return this.props.places.map((place, i) => {
                <Marker
                key={i}
                title={place.title}
                coordinate={place.coords}
                />
            })
        }
    render(){
        const{region} =this.props   
        return (
            <MapView
            region={region}
            style={styles.map}
            provider="google"
            showsUserLocation={true}
            followUserLocation={true}>
                {this.renderMarkers()}
            </MapView>
            )
        }
    }
   const styles = StyleSheet.create ({
    map: {
       height: 400,
       marginTop: 0
    }
 })

