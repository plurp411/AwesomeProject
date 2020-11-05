import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyCccYsv-qFz0HAExhRXPGu2TDStRQhG8_o",
    authDomain: "workouts-1f2c7.firebaseapp.com",
    databaseURL: "https://workouts-1f2c7.firebaseio.com",
    projectId: "workouts-1f2c7",
    storageBucket: "workouts-1f2c7.appspot.com",
    messagingSenderId: "78808038586",
    appId: "1:78808038586:web:f77a49c55e962350e01683",
    measurementId: "G-E4MCYXXCYK"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;

// import * as firebase from 'firebase';

// // Optionally import the services that you want to use
// import "firebase/auth";
// import "firebase/database";
// //import "firebase/firestore";
// //import "firebase/functions";
// //import "firebase/storage";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCccYsv-qFz0HAExhRXPGu2TDStRQhG8_o",
//   authDomain: "workouts-1f2c7.firebaseapp.com",
//   databaseURL: "https://workouts-1f2c7.firebaseio.com",
//   projectId: "workouts-1f2c7",
//   storageBucket: "workouts-1f2c7.appspot.com",
//   messagingSenderId: "78808038586",
//   appId: "1:78808038586:web:f77a49c55e962350e01683",
//   measurementId: "G-E4MCYXXCYK"
// };

// firebase.initializeApp(firebaseConfig);

// let database = firebase.database();

// firebase.database.enableLogging(function(message) {
//   console.log("[FIREBASE]", message);
// });
