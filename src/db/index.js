import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('habits.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS habits (id INTEGER PRIMARY KEY NOT NULL, habitTitle TEXT NOT NULL, habitType TEXT NOT NULL, habitDescription TEXT NOT NULL, habitDate TEXT NOT NULL, creationDate TEXT NOT NULL, habitImage TEXT)',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertHabit = (
  habitTitle,
  habitType,
  habitDescription,
  habitDate,
  creationDate,
  habitImage
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO habits (habitTitle, habitType, habitDescription, habitDate, creationDate, habitImage) VALUES (?,?,?,?,?,?)',
        [habitTitle, habitType, habitDescription, habitDate, creationDate, habitImage],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const selectHabit = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM habits',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
