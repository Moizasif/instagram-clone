import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA0DETJajx2c9Zts7jPNbfdEj80QwjYf5o",
    authDomain: "instagram-clone-47470.firebaseapp.com",
    projectId: "instagram-clone-47470",
    storageBucket: "instagram-clone-47470.appspot.com",
    messagingSenderId: "265475521520",
    appId: "1:265475521520:web:03dc4d896d7aa7583d7b35"
  };


  firebase.initializeApp(firebaseConfig)

  const db =firebase.firestore()

  export default db;