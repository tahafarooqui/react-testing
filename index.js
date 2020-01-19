import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
      var db = firebase.firestore();

  var firebaseConfig = {
    apiKey: "AIzaSyDDU8PiSVhHT8MOPuC_RbXHuJnYIDASrwg",
    authDomain: "zepforge-3b1b1.firebaseapp.com",
    databaseURL: "https://zepforge-3b1b1.firebaseio.com",
    projectId: "zepforge-3b1b1",
    storageBucket: "zepforge-3b1b1.appspot.com",
    messagingSenderId: "654675954394",
    appId: "1:654675954394:web:1cf319beceffd376f573e3",
    measurementId: "G-5D2KRRV1ZQ"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


  signup(){
        firebase.auth().createUserWithEmailAndPassword('tahafarooquitech@gmail.com', 'taha12345').catch(function(error) {
  // Handle Errors here.
  console.log(error.code);
  console.log(error.message);
});
  }


  signin(){
    firebase.auth().signInWithEmailAndPassword('tahafarooquitech@gmail.com', 'taha12345').catch(function(error) {
  // Handle Errors here.
    console.log(error.code);
  console.log(error.message);
  // ...
});
  }

  signOut(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
  }

  getprofile(){
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

    console.log(email);

  } else {
    // User is signed out.
    // ...
  }
});
  }

  insertData(){
      db.collection("users").add({
          first: "Ada",
          last: "Lovelace",
          born: 1815
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });

  }

  render() {

  var docRef = db.collection('users').doc('CN48DNRwqhZpqkpWMq1Y');
docRef.update({
    name: "Frankdd",

 });

this.getprofile();


    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
