import { createStackNavigator, createAppContainer} from 'react-navigation'
import Details from '../client/Details'
import Home from '../client/Home'
import Listings from '../client/Listings'


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Details: {
    screen: Details
  },
  Listings: {
    screen: Listings
  }
}, {
    initialRouteName: 'Home',
});
  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   homeHeader: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })

export default createAppContainer(AppNavigator);