import { Dimensions } from 'react-native';

import { whiteLight, black } from '../../utils/theme';

const deviceHeight = Dimensions.get('window').height;

export default {
  content: { backgroundColor: whiteLight, top: -1 },
  image: {
    left: 0,
    top: 0,
    width: '100%',
    height: deviceHeight / 4
  },
  arrow: {
    height: 20,
    width: 20,
    marginTop: 25,
    marginRight: 18,
    backgroundColor: black,
    borderRadius: 50,
    borderLeftWidth: 1,
    borderLeftolor: black
  }
};
