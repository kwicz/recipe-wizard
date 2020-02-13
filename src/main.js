// Import firebase modules.
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as firebaseui from "firebaseui";
import { Print } from "./print";
import { Week } from "./week";

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
$(document).ready(function() {
  let userID;

  //Login condition
  firebase.auth().onAuthStateChanged(function(user) {
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

  $("#signout").click(function() {
    firebase.auth().signOut().then(
      function() {
        $(".login").show();
        $(".site").hide();
        console.log("Signed Out");
      },
      function(error) {
        console.error("Sign Out Error", error);
      }
    );
  });

  //Submit and print meal query
  $("form").submit(function(event) {
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
  $(".search--results").on("click", "button", function() {
    let userDate = $("#get-date").val();
    db.collection("week-days").doc(this.name).collection("meals").add(print.arr[this.value]);

    db.collection("week-days").doc(this.name).collection("meals").get().then((snapshot) => {
      const values = snapshot.docs.map(function(doc) {
        return { id: doc.id, ...doc.data };
      });
      console.table(values);
    });
  });

  $("#get-date").change(function() {
    console.log(this.value);
  });

  // ------------- print week days ------------------ \\
  (() => {
    db.collection("week-days").doc("sunday").collection("meals").onSnapshot((querySnapshot) => {
      let printString = "";
      querySnapshot.forEach((doc) => {
        printString += `<p>${doc.data().label}</p>`;
      });
      $("#sunday").html(printString);
    });
  })();

  (() => {
    db.collection("week-days").doc("monday").collection("meals").onSnapshot((querySnapshot) => {
      let printString = "";
      querySnapshot.forEach((doc) => {
        printString += `<p>${doc.data().label}</p>`;
      });
      $("#monday").html(printString);
    });
  })();
  (() => {
    db.collection("week-days").doc("tuesday").collection("meals").onSnapshot((querySnapshot) => {
      let printString = "";
      querySnapshot.forEach((doc) => {
        printString += `<p>${doc.data().label}</p>`;
      });
      $("#tuesday").html(printString);
    });
  })();
  (() => {
    db.collection("week-days").doc("wednesday").collection("meals").onSnapshot((querySnapshot) => {
      let printString = "";
      querySnapshot.forEach((doc) => {
        printString += `<p>${doc.data().label}</p>`;
      });
      $("#wednesday").html(printString);
    });
  })();
  (() => {
    db.collection("week-days").doc("thursday").collection("meals").onSnapshot((querySnapshot) => {
      let printString = "";
      querySnapshot.forEach((doc) => {
        printString += `<p>${doc.data().label}</p>`;
      });
      $("#thursday").html(printString);
    });
  })();
  (() => {
    db.collection("week-days").doc("friday").collection("meals").onSnapshot((querySnapshot) => {
      let printString = "";
      querySnapshot.forEach((doc) => {
        printString += `<p>${doc.data().label}</p>`;
      });
      $("#friday").html(printString);
    });
  })();
  (() => {
    db.collection("week-days").doc("saturday").collection("meals").onSnapshot((querySnapshot) => {
      let printString = "";
      querySnapshot.forEach((doc) => {
        printString += `<p>${doc.data().label}</p>`;
      });
      $("#saturday").html(printString);
    });
  })();
});
