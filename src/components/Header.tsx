import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';

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
  <ImageBackground
    source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
    style={style.image}
  >
    <Text style={style.header}>Welcome to the RN workshop</Text>
  </ImageBackground>
);
