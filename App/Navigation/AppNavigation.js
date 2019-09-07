import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import Cart from '../Containers/Cart'

import styles from './Styles/NavigationStyles'

import FoodScreen from '../Containers/FoodScreen'
import FoodDetails from '../Containers/FoodDetails'
import Checkout from '../Containers/Checkout'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  FoodScreen: {screen: FoodScreen},
  Cart: {screen: Cart},
  FoodDetails: {screen: FoodDetails},
  Checkout: {screen: Checkout},
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
