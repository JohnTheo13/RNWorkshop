/* eslint-disable react/jsx-props-no-spreading */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Home, Details, SideBar, SelectImage, Write } from './screens';

const Drawer = createDrawerNavigator(
  {
    Home,
    Details,
    SelectImage,
    Write
  },
  {
    contentComponent: SideBar,
    contentOptions: {
      iconContainerStyle: {
        color: 'red',
        opacity: 1
      },
      activeTintColor: 'red'
    }
  }
);

export default createAppContainer(Drawer);
