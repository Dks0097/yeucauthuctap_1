import React, { useState } from "react";
import {FirebaseApp, FirebaseAuth} from './firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLogin = () => {
    const auth = FirebaseAuth();
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      Alert.alert(
        'Alert Title',
        'Đăng nhập thành công:'+this.state.email,
        [
          {
            text: 'Cancel',
            onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
            text: 'OK',
            onPress: () => Alert.alert('OK Pressed'),
            style: 'OK',
          },
        ],
        {
          cancelable: true,
          
        },
        this.setState({
          email:'',
          password:''
        })
      );
    
      // ...
    })
    .catch((error) => {
      Alert.alert(
        'Alert Title',
        'Đăng nhập Thất bại!',
        [
          {
            text: 'Cancel',
            onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
            text: 'OK',
            onPress: () => Alert.alert('OK Pressed'),
            style: 'OK',
          },
        ],
        {
          cancelable: true,
          
        },
        
      );
      // ..
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "blue", marginBottom: "70px" }}>Đăng Nhập</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          title="Login"
          onPress={this.handleLogin}
          style={styles.button}
        />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={styles.title}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6E6FA", // Gradient blue background
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 10, // Rounded edges
    backgroundColor: "white", // White background
  },
  button: {
    paddingTop: "70px",
    backgroundColor: "blue", // Blue button
    color: "white", // White text
    borderRadius: 10, // Rounded edges
  },
  title: {
    color: "black", // Black text
    fontSize: 24, // Larger font size
    marginBottom: "70px", // Space below the title
  },
  link: {
    color: "black", // Black text
  },
});
