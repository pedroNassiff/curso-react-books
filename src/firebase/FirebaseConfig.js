import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCo7YHf8JaZUtQb_vR29C1dzjil8SMXWUc",
    authDomain: "bookscurso.firebaseapp.com",
    projectId: "bookscurso",
    storageBucket: "bookscurso.appspot.com",
    messagingSenderId: "1032446369563",
    appId: "1:1032446369563:web:96ab8f4c155346d80efdbe"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthPRovider = new firebase.auth.GoogleAuthProvider();
  export const auth= firebase.auth();
  export {
      db,
      googleAuthPRovider,
      firebase,
      firebaseConfig
  }