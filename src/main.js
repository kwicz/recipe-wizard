// Import firebase modules.
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as firebaseui from "firebaseui";
import { Print } from "./print";


//styles
import "./scss/main.scss";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
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
  // Initialize the FirebaseUI Widget using Firebase.
}

// the Database
let db = firebase.firestore();
let ui = new firebaseui.auth.AuthUI(firebase.auth());
let print = new Print();

// ON LOAD
$(document).ready(function () {
  let userID;

  //Login condition
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      userID = firebase.auth().currentUser.uid;
      $(".login").hide();
      $(".site").show();
      console.log(userID);
    } else {
      $(".site").hide();
      ui.start("#firebaseui-auth-container", {
        signInSuccessUrl: "#",
        signInOptions: [
          // List of OAuth providers supported.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: "#",
        // Privacy policy url.
        privacyPolicyUrl: "#"
      });
    }
  });

  $("#signout").click(function () {
    firebase.auth().signOut().then(
      function () {
        $(".login").show();
        $(".site").hide();
        console.log("Signed Out");
      },
      function (error) {
        console.error("Sign Out Error", error);
      }
    );
  });

  //Submit and print meal query
  $("form").submit(function (event) {
    event.preventDefault();
    const query = $("#search-query").val();
    $("#search-query").val("");

    (async () => {
      let mealService = new MealsService(query);
      const response = await mealService.getMealByQuery();
      console.log(response);
      if (response.hits.length > 0) {
        print.makeElements(response);
        $(".search--results").html(print.printMealsQuery());
      } else {
        $(".search--results").html("Sorry, no results.  Please search for something else.")
      }
    })();
  });

  //on click push to database
  $(".search--results").on("click", "button", function () {
    let userDate = $("#get-date").val();
    db.collection("week-days").doc(this.name).collection("meals").add(print.arr[this.value]);

    db.collection("week-days").doc(this.name).collection("meals").get().then((snapshot) => {
      const values = snapshot.docs.map(function (doc) {
        return { id: doc.id, ...doc.data };
      });
    });
  });

  $("#get-date").change(function () {
    console.log(this.value);
  });

  $('.week-day--content').on('click', 'p', function (event) {
    let values = this.id.split(',');
    db.collection("week-days").doc(values[1]).collection("meals").doc(values[0]).delete().catch(function (error) {
      console.error("Error removing document: ", error);
    });

  });

  // ------------- print week days ------------------ \\
  let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  for (let i = 0; i < days.length; i++) {
    db.collection("week-days").doc(days[i]).collection("meals").onSnapshot((querySnapshot) => {
      let printString = "";
      querySnapshot.forEach((doc) => {
        printString += `<p id="${doc.id},${days[i]}" >${doc.data().label}</p>`;
      });
      $("#" + days[i]).html(printString);
    });
  }

  // ------------ Grocery List -------------------- \\
  $('#grocery-btn').click(function () {
    let groceryList = "";
   days.forEach(function (day) {
        db.collection("week-days").doc(day).collection("meals").get().then(function (meals) {
          meals.forEach(function (meal) {
            // groceryList.push(meal.data().ingredientLines);
            for (let item in meal.data().ingredientLines) {
              // groceryList.push(meal.data().ingredientLines[item]);
              $(".grocery-list").append(`<li><div class="form-check">
                <input id="${meal.data().ingredientLines[item]}" class="form-check-input" type="checkbox" value="">
                <label for="${meal.data().ingredientLines[item]}" class="form-check-label">
                ${meal.data().ingredientLines[item]}</label>
              </div><li>`);
              // groceryList += meal.data().ingredientLines[item];
            }
          });
        });
      });
      // $(".search--results").append(groceryList);


    // groceryList.forEach((item)=>{

    // });
    // console.log(groceryList);
    console.log(days);
  });

});//end document ready
