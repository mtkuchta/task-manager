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

firebase.initializeApp(firebaseConfig);

export const newUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then();
};

export const appAuth = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('user');
    })
    .catch((error) => console.log(error));
  console.log('bangla');
};

export const auth = firebase.auth;
