import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DATA } from '../../utils/mockData';

interface Item {
  id: string;
  title: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});

const Item = ({
  title
}: {
  title: string;
}): React.FunctionComponentElement<{}> => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default (): React.FunctionComponentElement<{}> => (
  <View style={styles.container}>
    {DATA.map(({ id, title }: Item) => (
      <Item title={title} key={id} />
    ))}
  </View>
);
