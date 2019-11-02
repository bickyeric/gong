import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import BlankScreen from '../Containers/BlankScreen'
import SearchResultScreen from '../Containers/SearchResultScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  BlankScreen: { screen: BlankScreen },
  SearchResultScreen: { screen: SearchResultScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
