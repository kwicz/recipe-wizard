
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { firebaseui } from "firebaseui";

//styles
import "./scss/main.scss";
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import $ from "jquery";

import { MealsService } from "./meals-service";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDsGOuBHKULTwV32BSxcPH6B1cqd9oUhug",
  authDomain: "recipe-wizards.firebaseapp.com",
  databaseURL: "https://recipe-wizards.firebaseio.com",
  projectId: "recipe-wizards",
  storageBucket: "recipe-wizards.appspot.com",
  messagingSenderId: "371538083718",
  appId: "1:371538083718:web:3f6f16ff998e2d43e97607",
  measurementId: "G-MZ9VBYSXP1"
});

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// the Database
let db = firebase.firestore();

function addWeek() {
  db.collection("weeks").add({
    test: 'cats',
    other: 'dogs'
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}
// ON LOAD
document.addEventListener("DOMContentLoaded", function() {


      $('.addWeek').click(function(){
        addWeek();
      });

      $('form').submit(function(event){
        event.preventDefault();
        const query = $('search-query').val();
        $('search-query').val("");

      (async () => {
        let mealService = new MealsService();
        const response = await mealService.getMealByQuery(query);
        getElements(response);
      })();

      function getElements(response) {
        console.log(response);
      }

      });
});


