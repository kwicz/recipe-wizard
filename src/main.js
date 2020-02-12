
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
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

function sendToLink() {
  console.log('logging')
}


// ON LOAD
$(document).ready(function () {
  let searchObj = {};

  $('.addWeek').click(function () {
    addWeek();
  });

  $('form').submit(function (event) {
    event.preventDefault();
    const query = $('#search-query').val();
    $('#search-query').val("");

    (async () => {
      let mealService = new MealsService(query);
      const response = await mealService.getMealByQuery();
      makeElements(response);
    })();

    function makeElements(response) {
      let printObj = [];
      console.log(response);
      response.hits.forEach(function (hit) {
        const { label, image, source, url, ingredientLines } = hit.recipe;
        const tempObj = {
          label,
          image,
          source,
          url,
          ingredientLines
        }
        printObj.push(tempObj);
      });
      console.log(printObj);
      searchObj = printObj;
      printReturn(printObj);
    }
  });


  function printReturn(arr){
    let printTo = $('.search--results');
    let printString = "";
  
    arr.forEach(function(item, index) {
      printString += `<div class="col-md-3 meal-card card"><a href= "${item.url}" target="_blank">
      <h3>${item.label}</h3><div class="img-box">
      <img src="${item.image}"></div></a>
        <div class="day-btns">
          <button class="btn btn-success btn-sm" name="sunday" value="${index}">S</button>
          <button class="btn btn-success btn-sm" name="monday" value="${index}">M</button>
          <button class="btn btn-success btn-sm" name="tuesday" value="${index}">T</button>
          <button class="btn btn-success btn-sm" name="wednesday" value="${index}">W</button>
          <button class="btn btn-success btn-sm" name="thursday" value="${index}">R</button>
          <button class="btn btn-success btn-sm" name="friday" value="${index}">F</button>
          <button class="btn btn-success btn-sm" name="saturday" value="${index}">S</button>
        </div>
      </div>`;
    });
    printTo.html(printString);
  }

  //on click push to database
  $('.search--results').on('click', 'button', function(){
    db.collection("cookie").add(searchObj[this.value])
    console.log(this.name, this.value);
  });


  $('#get-date').change(function(){
    console.log(this.value)
  });
});


