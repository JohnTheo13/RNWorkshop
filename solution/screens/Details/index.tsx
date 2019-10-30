import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

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

export default (): React.FunctionComponentElement<{}> => {
  const [list, setList] = useState([]);

  const fetchData = async (): Promise<void> => {
    let response;
    try {
      response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?userId=2',
        {
          method: 'GET'
        }
      );
      switch (response.status) {
        case 404:
          throw Error('not_found');
        case 405:
          throw Error('not_allowed');
        default:
      }
    } catch (error) {
      return Promise.reject(error);
    }
    const data = await response.json();
    return setList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {list.length > 0 ? (
        list.map(({ id, title }: Item) => <Item title={title} key={id} />)
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};
