import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

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
  firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
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
