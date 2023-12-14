// Trong ManageUsersScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button,StyleSheet,Alert , TextInput} from 'react-native';
import { getAllUsers, updateUser, deleteUser } from './Database'; // Thay đổi path tùy thuộc vào cấu trúc dự án của bạn

const ManageUsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [newUsername, setnewUsername] = useState('');
  const [newPassword, setnewPassword] = useState('');
  useEffect(() => {
    // Gọi hàm lấy tất cả người dùng từ cơ sở dữ liệu SQLite
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdateUser = async (id, newUsername, newPassword) => {
    try {
      // Gọi hàm sửa thông tin người dùng trong cơ sở dữ liệu SQLite
      await updateUser(id, newUsername, newPassword);
      Alert.alert(
        'Thông báo',
        'Cập nhật người dùng thành công!',
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
      console.log('User updated successfully!');
      // Cập nhật lại danh sách người dùng
      const updatedUsers = await getAllUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error updating user: ', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      // Gọi hàm xóa người dùng từ cơ sở dữ liệu SQLite
      await deleteUser(id);
      Alert.alert(
        'Thông báo',
        'Xóa người dùng thành công!',
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
      console.log('User deleted successfully!');
      // Cập nhật lại danh sách người dùng
      const updatedUsers = await getAllUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user: ', error);
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Manage Users Screen</Text>
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.userContainer}>
          <Text style={styles.username}>User: {item.id}</Text>
          <Text style={styles.username}>UserName: {item.username}</Text>
          <Text style={styles.username}>Password: {item.password}</Text>
          <TextInput
            style={styles.input}
            placeholder="New UserName"
            onChangeText={text => setnewUsername(text)}
            value={newUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            onChangeText={text => setnewPassword(text)}
            value={newPassword}
          />
         <View style={styles.buttonContainer}>
            <Button
              title="Update"
              onPress={() => handleUpdateUser(item.id, newUsername, newPassword)}
            />
            <Button title="Delete" onPress={() => handleDeleteUser(item.id)} />
          </View>
        </View>
      )}
    />
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
});
export default ManageUsersScreen;
