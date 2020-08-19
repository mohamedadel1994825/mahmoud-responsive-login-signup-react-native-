import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import RootStackScreen from './screens/RootStackScreen'
const  App=()=> {
  return (
 <NavigationContainer>
<RootStackScreen/>
 </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App