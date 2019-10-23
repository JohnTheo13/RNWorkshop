# React - Native Workshop
## Cause
This workshop was made in order to get our hands dirty with [react-native](https://facebook.github.io/react-native/)(and some typescript).  
[React](https://reactjs.org/) knowledge is expected
### Requirements
Please follow the instruction to install the dependecies needed to use react-native-cli in your device:  
https://facebook.github.io/react-native/docs/getting-started

### Getting Started
```
git clone https://github.com/JohnTheo13/RNWorkshop.git
cd RNWorkshop
yarn
```
### Step 1
Create start screen (Home) using the following components:  
```
import {
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  View
} from 'react-native';
```
### Step 2
Create navigation screens using [rn-navigation](https://reactnavigation.org/docs/en/hello-react-navigation.html) second screen (Details)
### Step 3
Add Button to Home to move to Details screen
### Step 4
Add drawer navigation with:  
```import { createDrawerNavigator } from 'react-navigation-drawer';```
### Step  5
Add list to second screen using mockData from utils folder
### Step 6 
Add 3d screen with image switch
### Step 7
Add [react-native-fs](https://github.com/itinance/react-native-fs)
### Step 8
Create file write function
### Step 9
Create file read
### Step 10
Check app on different android devices
### Step 11
Check app on IOS devices
