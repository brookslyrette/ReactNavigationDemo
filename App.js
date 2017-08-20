import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Screen1 = ( {navigation} ) => (
  <View style={styles.container}>
    <Text>Screen 1</Text>
    <Button
      title="Go To Screen 2"
      onPress={() => navigation.navigate('Screen2')}>
    </Button>
    <Button
      title="Go To Screen 3"
      onPress={() => navigation.navigate('Screen3')}>
    </Button>
  </View>
)
const Screen2 = () => (<View style={styles.container}><Text>Screen 2</Text></View>)
const Screen3 = () => (<View style={styles.container}><Text>Screen 3</Text></View>)

const Navigator = StackNavigator({
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 },
  Screen3: { screen: Screen3 },
}, {
  navigationOptions: {
    headerTitle: 'Default App Title',
    headerTitleStyle: {
      color: '#FFF'
    },
    headerStyle: {
      backgroundColor: '#f57c00'
    },
    headerBackTitle: null,
    headerTintColor: '#FFF',
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Navigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
