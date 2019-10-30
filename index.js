/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import AppSolution from './solution/AppSolution'

AppRegistry.registerComponent(appName, () => AppSolution);
