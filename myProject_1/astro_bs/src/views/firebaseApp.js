import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqi0AG2RFN2LvQ5THmQpEeI4ulhPQWpfo",
    authDomain: "astro-bs.firebaseapp.com",
    databaseURL: "https://astro-bs-default-rtdb.firebaseio.com",
    projectId: "astro-bs",
    storageBucket: "astro-bs.appspot.com",
    messagingSenderId: "727534014852",
    appId: "1:727534014852:web:b7128d6e10b71ad67a4dd1",
    measurementId: "G-8Q108XH4R9"
  };
var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
