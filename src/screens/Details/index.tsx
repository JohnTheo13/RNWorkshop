import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

const style = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    marginTop: 20
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default (): React.FunctionComponentElement<{}> => (
  <Text style={style.image}>details</Text>
);
