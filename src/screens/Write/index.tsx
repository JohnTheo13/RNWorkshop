import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { readFile, writeFile } from '../../utils/fsMethods';

interface State {
  text: string;
}

interface Props {
  navigation: NavigationStackProp;
}

export default class Write extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  change = (text: string): void => {
    this.setState({ text });
  };

  render(): React.FunctionComponentElement<{}> {
    const { text } = this.state;
    return (
      <View>
        <Text>Hey Look</Text>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          numberOfLines={10}
          multiline
          onChangeText={this.change}
          value={text}
        />
        <Button title="Write to file" onPress={() => writeFile(text)} />
      </View>
    );
  }
}
