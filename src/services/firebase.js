import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA_m_taXBHFYCeitt4GwMPzL5RbxE0OA9o',
  authDomain: 'task-manager-cc51b.firebaseapp.com',
  databaseURL: 'https://task-manager-cc51b-default-rtdb.firebaseio.com',
  projectId: 'task-manager-cc51b',
  storageBucket: 'task-manager-cc51b.appspot.com',
  messagingSenderId: '803205366966',
  appId: '1:803205366966:web:40f20341d359b8482c5217',
};
export const auth = firebase.auth;
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore;

export const getTasksfromDatabase = async (user) => {
  const fetchedTasks = [];
  if (user.currentUser) {
    const userRef = db().collection(`${user.currentUser.uid}`);
    const snapshot = await userRef.get();
    snapshot.forEach((doc) => {
      fetchedTasks.push(doc.data());
    });
  }
  return fetchedTasks;
};

export const addTaskToDatabase = (userID, task) => {
  db().collection(`${userID}`).doc(`${task.id}`).set(task, { merge: true });
};

export const updateTaskInDatabase = (user, tasks, id) => {
  const task = tasks.find((task) => task.id === id);
  db().collection(`${user.currentUser.uid}`).doc(`${id}`).set(task);
};

export const deleteTaskInDatabase = (user, id) => {
  db().collection(`${user.currentUser.uid}`).doc(`${id}`).delete();
};

export const appAuth = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);

  // firebase
  //   .auth()
  //   .setPersistence(firebase.auth.Auth.Persistence.SESSION)
  //   .then(() => {
  //     // Existing and future Auth states are now persisted in the current
  //     // session only. Closing the window would clear any existing state even
  //     // if a user forgets to sign out.
  //     // ...
  //     // New sign-in will be persisted with session persistence.
  //     return firebase.auth().signInWithEmailAndPassword(email, password);
  //   })
  //   .catch((error) => {});
};

export const logout = () => {
  firebase.auth().signOut();
};
