export class FirebaseConfig {
  constructor(firebase) {
    this.firebase = firebase;
  }
  config() {
    return this.firebase.initializeApp({
      apiKey: "AIzaSyDsGOuBHKULTwV32BSxcPH6B1cqd9oUhug",
      authDomain: "recipe-wizards.firebaseapp.com",
      databaseURL: "https://recipe-wizards.firebaseio.com",
      projectId: "recipe-wizards",
      storageBucket: "recipe-wizards.appspot.com",
      messagingSenderId: "371538083718",
      appId: "1:371538083718:web:3f6f16ff998e2d43e97607",
      measurementId: "G-MZ9VBYSXP1"
    });
  }

  start() {
    if (!this.firebase.apps.length) {
      this.firebase.initializeApp(this.config());
      // Initialize the FirebaseUI Widget using Firebase.
    }
  }
}
