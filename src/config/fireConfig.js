// import firebase from "firebase/app";

export const FireConfig = function(firebase) {
  this.conf = firebase.initializeApp({
    apiKey: "AIzaSyDsGOuBHKULTwV32BSxcPH6B1cqd9oUhug",
    authDomain: "recipe-wizards.firebaseapp.com",
    databaseURL: "https://recipe-wizards.firebaseio.com",
    projectId: "recipe-wizards",
    storageBucket: "recipe-wizards.appspot.com",
    messagingSenderId: "371538083718",
    appId: "1:371538083718:web:3f6f16ff998e2d43e97607",
    measurementId: "G-MZ9VBYSXP1"
  });
};
