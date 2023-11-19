import React from "react";
import {FirebaseApp, FirebaseAuth} from './firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
export default class SignUp extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      
    };
  }
  
  handleSignUp = () => {
 
    const auth = FirebaseAuth();
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
.then(() => {
  // Signed in 
  Alert.alert(
    'Alert Title',
    'Đăng kí thành công:'+this.state.email,
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
    'Đăng kí Thất bại!',
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
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Login")}
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
