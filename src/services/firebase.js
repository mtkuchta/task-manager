import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA_m_taXBHFYCeitt4GwMPzL5RbxE0OA9o',
  authDomain: 'task-manager-cc51b.firebaseapp.com',
  projectId: 'task-manager-cc51b',
  storageBucket: 'task-manager-cc51b.appspot.com',
  messagingSenderId: '803205366966',
  appId: '1:803205366966:web:40f20341d359b8482c5217',
};
export const auth = firebase.auth;
firebase.initializeApp(firebaseConfig);

export const newUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
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
  firebase
    .auth()
    .signOut()
    .then(() => console.log('wylogowano'));
};
