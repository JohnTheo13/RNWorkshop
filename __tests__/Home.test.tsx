import React from 'react';
import { Button, Text } from 'react-native';
import renderer from 'react-test-renderer';
import Home from '../solution/screens/Home';
// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const navigation = {
    state: {
      routeName: 'Home'
    },
    navigate: jest.fn()
  };

  const component = renderer.create(<Home navigation={navigation} />);
  // console.log(component.root.findByType(Text).props.children[0]);

  expect(component.root.findAllByType(Text)[0].props.children.join('')).toBe(
    `Welcome to the RN workshop ${navigation.state.routeName} screen`
  );

  renderer.act(() => {
    component.root.findByType(Button).props.onPress();
  });

  expect(navigation.navigate).toHaveBeenCalledTimes(1);

  expect(component.toJSON()).toMatchSnapshot();
});
