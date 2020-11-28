import * as firebase from "firebase";
require("@firebase/firestore");
// Vishakha - Wireless library Database
var firebaseConfig = {
  apiKey: "",
  authDomain: "wireless-lib-1a95d.firebaseapp.com",
  databaseURL: "https://wireless-lib-1a95d.firebaseio.com",
  projectId: "wireless-lib-1a95d",
  storageBucket: "wireless-lib-1a95d.appspot.com",
  messagingSenderId: "791890651956",
  appId: "1:791890651956:web:c3b5ab8ea7e647a5019361",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
