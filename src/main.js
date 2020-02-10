// import { example } from './example';
// import firebase from "firebase";
// import "firebase/auth";
// import "firebase/firebase-storage";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import { firebaseui } from "firebaseui";

// import { FireConfig } from "./config/fireConfig";
// import { Auth } from "./config/fireAuth";
// import * as firebase from "firebase";
import "./scss/main.scss";
import $ from "jquery";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCgRI_bMEQQcVgz_heSs724BI_3qMtlX7o",
  authDomain: "golden-girls-battle-sim.firebaseapp.com",
  databaseURL: "https://golden-girls-battle-sim.firebaseio.com",
  projectId: "golden-girls-battle-sim",
  storageBucket: "golden-girls-battle-sim.appspot.com",
  messagingSenderId: "786687293646",
  appId: "1:786687293646:web:3b72244d78afe89153789f",
  measurementId: "G-CQW69QD0LX"
});

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const fireConfig = new FireConfig(firebase);
// const storage = app.storage();
// const ref = storage.ref("path");
// const auth = new Auth(firebase, firebaseui);
// auth();
// console.log(auth);
// console.log(ref);
// console.log(firebase);

document.addEventListener("DOMContentLoaded", function() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      $(".output").html("you are logged in");
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });

  //get form submit button
  $("form").submit((event) => {
    event.preventDefault();
    let input1 = $("#input-1").val();
    let input2 = $("#input-2").val();

    //print to DOM
    $(".output").html(input1 + " " + input2);
  });
});
