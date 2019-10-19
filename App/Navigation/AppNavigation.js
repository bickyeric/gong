import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import BlankScreen from '../Containers/BlankScreen'
import SearchResultScreen from '../Containers/SearchResultScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  BlankScreen: { screen: BlankScreen },
  SearchResultScreen: { screen: SearchResultScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SearchResultScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
