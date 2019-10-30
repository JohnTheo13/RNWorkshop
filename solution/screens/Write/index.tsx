import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { readFile, writeFile } from '../../utils/fsMethods';

interface State {
  text: string;
  title: string;
}

interface Props {
  navigation: NavigationStackProp;
}

const style = StyleSheet.create({
  button: {
    marginTop: 10
  }
});

export default class Write extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
      title: 'Initial title'
    };
  }

  change = (text: string): void => {
    this.setState({ text });
  };

  write = (): void => {
    const { text } = this.state;
    writeFile(text);
  };

  read = async (): Promise<void> => {
    const file = await readFile();
    this.setState({ title: file });
  };

  render(): React.FunctionComponentElement<{}> {
    const { text, title } = this.state;
    return (
      <SafeAreaView>
        <Text style={{ alignSelf: 'center', fontSize: 40 }}>{title}</Text>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          numberOfLines={10}
          multiline
          onChangeText={this.change}
          value={text}
        />
        <View style={style.button}>
          <Button title="Write to file" onPress={this.write} />
        </View>
        <View style={style.button}>
          <Button title="Read File" onPress={this.read} />
        </View>
      </SafeAreaView>
    );
  }
}
