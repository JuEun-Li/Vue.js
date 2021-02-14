import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQVPnndDFWaINxvxKUTgGEDArCU3P6-rc",
    authDomain: "astronomy-page02.firebaseapp.com",
    databaseURL: "https://astronomy-page02-default-rtdb.firebaseio.com",
    projectId: "astronomy-page02",
    storageBucket: "astronomy-page02.appspot.com",
    messagingSenderId: "928797604782",
    appId: "1:928797604782:web:b3c2748c523c7ca7afa63f",
    measurementId: "G-6FSFT44SPC"
  };
var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;

