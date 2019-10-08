/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center'
  }
});

const App = (): React.FunctionComponentElement<{}> => {
  return (
    <View>
      <Text style={style.header}>Welcome to the RN workshop</Text>
    </View>
  );
};

export default App;
