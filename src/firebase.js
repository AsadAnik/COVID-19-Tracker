import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBaCz4sQOcsryv5ocjsBMC1dTn90Y5eRt8",
    authDomain: "covid-19-tracker-dfe5b.firebaseapp.com",
    databaseURL: "https://covid-19-tracker-dfe5b.firebaseio.com",
    projectId: "covid-19-tracker-dfe5b",
    storageBucket: "covid-19-tracker-dfe5b.appspot.com",
    messagingSenderId: "826966257246",
    appId: "1:826966257246:web:7e5145cfbf3e2129fa0ecf",
    measurementId: "G-W6N9S8F492"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();