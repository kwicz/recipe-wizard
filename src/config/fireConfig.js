// import firebase from "firebase/app";

export const FireConfig = function(firebase) {
  this.conf = firebase.initializeApp({
    apiKey: "AIzaSyCgRI_bMEQQcVgz_heSs724BI_3qMtlX7o",
    authDomain: "golden-girls-battle-sim.firebaseapp.com",
    databaseURL: "https://golden-girls-battle-sim.firebaseio.com",
    projectId: "golden-girls-battle-sim",
    storageBucket: "golden-girls-battle-sim.appspot.com",
    messagingSenderId: "786687293646",
    appId: "1:786687293646:web:3b72244d78afe89153789f",
    measurementId: "G-CQW69QD0LX"
  });
};
