//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';


import { StatusBar }    from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';

import Main from './src/Main'

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style='auto' />
    </>
  );
};

export default App;
/*

import Main from './src/Main'

const App = () => {
  return <Main />;
};

export default App;


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! UPDATE UPDATE </Text>
      {HelloWorld()}
      {PressableText()}
      <StatusBar style="auto" />
    </View>
  );
}

const HelloWorld = props => {
  return <Text>Hello world!</Text>
};

const PressableText = props => {
  return (
    <Pressable onPress={() => Alert.alert('You pressed the text!')}>
      <Text>You can press me</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
