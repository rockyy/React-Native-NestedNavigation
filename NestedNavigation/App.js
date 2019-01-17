/**
 * 
 */
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import HomeDetail from './src/screens/HomeDetail';
import Login from './src/screens/Login'

const stackNavigationHome = createStackNavigator({ Home , HomeDetail});
const stackNavigationSetting = createStackNavigator({ Settings},{headerMode: 'none'});

const TabNavigator = createBottomTabNavigator({
  home: stackNavigationHome,
  settings: stackNavigationSetting,
});

const stackNavigationLogin = createStackNavigator({ Login, TabNavigator},{headerMode: 'none'});

export default createAppContainer(stackNavigationLogin);
