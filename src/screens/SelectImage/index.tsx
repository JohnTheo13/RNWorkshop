/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Switch,
  Dimensions
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: deviceHeight / 2,
    overflow: 'hidden',
    marginTop: 30
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  }
});

const lisbon = 'lisbon';
const noLisbon = 'no-lisbon';

export default (): React.FunctionComponentElement<{}> => {
  const [image, setState] = useState(lisbon);
  const change = (): void => {
    if (image === lisbon) {
      setState(noLisbon);
    } else {
      setState(lisbon);
    }
  };
  const imageSource =
    image === lisbon
      ? require(`../../../assets/lisbon.png`)
      : require(`../../../assets/no-lisbon.jpg`);
  return (
    <View>
      <View style={style.container}>
        <Text style={style.title}>TITLE</Text>
        <Switch onValueChange={change} value={image === lisbon} />
      </View>
      <Image style={style.image} source={imageSource} />
    </View>
  );
};
