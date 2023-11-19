// screens/InfoScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import {firebaseApp} from '../screens/firebaseConfig';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default function InfoScreen({ navigation }) {
  // const user = firebaseApp.auth().currentUser;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Info Screen</Text>
      {/* <Text>Email: {user ? user.email : 'N/A'}</Text> */}
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
