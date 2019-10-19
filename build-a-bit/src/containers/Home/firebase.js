import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/storage';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDmQUGFcPRJd7HVxawIZKICyTDqzfiG8y8",
    authDomain: "innerve-hackathon.firebaseapp.com",
    databaseURL: "https://innerve-hackathon.firebaseio.com",
    projectId: "innerve-hackathon",
    storageBucket: "innerve-hackathon.appspot.com",
    messagingSenderId: "237648817851",
    appId: "1:237648817851:web:99ffcb2e2214c40c1b439e",
    measurementId: "G-CF800N6EE0"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();

export {
  database, storage, firebase as default
}
