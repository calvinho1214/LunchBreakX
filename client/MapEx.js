import React from 'react'
import {
   StyleSheet
} from 'react-native'
import MapView from 'react-native-maps'
export default MapEx = (props) => {
   return (
      <MapView
         style={styles.map}
         showsUserLocation={true}
         followUserLocation={true}
         zoomEnabled={true}
      />
   )
}

const styles = StyleSheet.create ({
   map: {
      height: 400,
      marginTop: 80
   }
})