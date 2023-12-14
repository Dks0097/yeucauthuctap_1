// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';
import { checkUser } from './Database';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const isUserValid = await checkUser(username, password);
      if (isUserValid) {
        Alert.alert(
          'Thông báo',
          'Đăng nhập thành công!',
          [
            {
              text: 'Đóng',
              onPress: () => navigation.navigate('ManageUsers'),
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
            onDismiss: () =>
              Alert.alert(
                'This alert was dismissed by tapping outside of the alert dialog.',
              ),
          },
        );
        // Chuyển hướng đến màn hình quản lý người dùng hoặc màn hình chính
        // navigation.navigate('ManageUsers'); hoặc navigation.navigate('Home');
      } else {
        Alert.alert(
          'Thông báo',
          'Sai tài khoản hoặc mật khẩu!',
          [
            {
              text: 'Đóng',
              
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
            onDismiss: () =>
              Alert.alert(
                'This alert was dismissed by tapping outside of the alert dialog.',
              ),
          },
        );
      }
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Login Screen</Text>
    <TextInput
      style={styles.input}
      placeholder="Username"
      value={username}
      onChangeText={(text) => setUsername(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      value={password}
      onChangeText={(text) => setPassword(text)}
      secureTextEntry
    />
    <Button title="Login" onPress={handleLogin} />
    <Button title="Register" onPress={() => navigation.navigate('Register')} />
  </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
export default LoginScreen;
