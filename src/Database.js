import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');

// Create users table if it doesn't exist
db.transaction(tx => {
  tx.executeSql(
    'drop table if exists users;'
  );
});
db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT);'
  );
});


// Hàm thêm người dùng
export const addUser = (username, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT INTO users (username, password) VALUES (?, ?)',
          [username, password],
          (_, results) => {
            resolve(results);
          },
          (_, error) => {
            reject(error);
          }
        );
      },
      (error) => {
        reject(error);
      }
    );
  });
};

// Hàm kiểm tra người dùng
export const checkUser = (username, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT * FROM users WHERE username = ? AND password = ?',
          [username, password],
          (_, results) => {
            resolve(results.rows.length > 0);
          },
          (_, error) => {
            reject(error);
          }
        );
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT * FROM users',
          [],
          (_, results) => {
            resolve(results.rows._array);
          },
          (_, error) => {
            reject(error);
          }
        );
      },
      (error) => {
        reject(error);
      }
    );
  });
};

// Hàm sửa thông tin người dùng
export const updateUser = (id, newUsername, newPassword) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'UPDATE users SET username = ?, password = ? WHERE id = ?',
          [newUsername, newPassword, id],
          (_, results) => {
            resolve(results);
          },
          (_, error) => {
            reject(error);
          }
        );
      },
      (error) => {
        reject(error);
      }
    );
  });
};

// Hàm xóa người dùng
export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'DELETE FROM users WHERE id = ?',
          [id],
          (_, results) => {
            resolve(results);
          },
          (_, error) => {
            reject(error);
          }
        );
      },
      (error) => {
        reject(error);
      }
    );
  });
};

// Hàm tìm người dùng
export const searchUser = (search) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT * FROM users WHERE username LIKE ? OR id LIKE ?',
          [`%${search}%`, `%${search}%`],
          (_, results) => {
            resolve(results.rows._array);
          },
          (_, error) => {
            reject(error);
          }
        );
      },
      (error) => {
        reject(error);
      }
    );
  });
};

// const searchU = () => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'SELECT * FROM users WHERE name LIKE ? OR email LIKE ?',
//       [`%${search}%`, `%${search}%`],
//       (_, { rows }) => {
//         setUsers(rows._array);
//       }
//     );
//   });
// };