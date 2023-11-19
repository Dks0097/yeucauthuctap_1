// screens/HomeScreen.js
import React from 'react';

import { View, Text, Button } from 'react-native';
// import {firebase} from '../src/screens/firebase';

export default function HomeScreen({ navigation }) {
//   const user = firebaseApp.auth().currentUser;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Welcome, {user ? user.email : 'Guest'}!</Text> */}
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
