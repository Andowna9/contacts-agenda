import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA2TapaCJYrui5iC-oHlhgrXFX-Fuk3ah4",
    authDomain: "vue-coolgenda.firebaseapp.com",
    databaseURL: "https://vue-coolgenda-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-coolgenda",
    storageBucket: "vue-coolgenda.appspot.com",
    messagingSenderId: "358821203276",
    appId: "1:358821203276:web:998f6304d47dd8abb453e9"
  };

export const db = firebase.initializeApp(firebaseConfig).database();
  