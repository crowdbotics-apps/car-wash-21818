import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps154841Navigator from '../features/Maps154841/navigator';
import Add-Item154840Navigator from '../features/Add-Item154840/navigator';
import Maps154836Navigator from '../features/Maps154836/navigator';
import UserProfile154832Navigator from '../features/UserProfile154832/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps154841: { screen: Maps154841Navigator },
Add-Item154840: { screen: Add-Item154840Navigator },
Maps154836: { screen: Maps154836Navigator },
UserProfile154832: { screen: UserProfile154832Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
