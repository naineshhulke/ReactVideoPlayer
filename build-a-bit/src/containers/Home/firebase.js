import firebase from "@firebase/app";
import "@firebase/storage";
import "@firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyC9e0e7OVrNNSNAmQj6b7tzRpqy_QetVX0",
  authDomain: "videoplayerbuildabit.firebaseapp.com",
  databaseURL: "https://videoplayerbuildabit.firebaseio.com",
  projectId: "videoplayerbuildabit",
  storageBucket: "videoplayerbuildabit.appspot.com",
  messagingSenderId: "319194070295",
  appId: "1:319194070295:web:dcae9a1a81a33327220b52",
  measurementId: "G-601P3TTQ0V"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();

export { database, storage, firebase as default };
