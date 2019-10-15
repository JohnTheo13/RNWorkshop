import React from 'react';
import { Text, ImageBackground, StyleSheet, Button, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { white } from '../../config/theme';

const style = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
    color: white,
    marginTop: 20,
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%'
  },
  button: {
    bottom: 20
  }
});

export default ({
  navigation: {
    state: { routeName },
    navigate
  }
}: {
  navigation: NavigationStackProp;
}): React.FunctionComponentElement<{}> => (
  <ImageBackground
    source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
    style={style.image}
  >
    <Text style={style.header}>
      Welcome to the RN workshop {routeName} screen
    </Text>
    <View style={style.button}>
      <Button onPress={(): boolean => navigate('Details')} title="To Details" />
    </View>
  </ImageBackground>
);
