 import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBM68kxeUUtzi6iFveDXUrdOON-PmxEwW4",
    authDomain: "school-attendance-app-f7469.firebaseapp.com",
    databaseURL: "https://school-attendance-app-f7469-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-f7469",
    storageBucket: "school-attendance-app-f7469.appspot.com",
    messagingSenderId: "221081155569",
    appId: "1:221081155569:web:bf5c247b7f498a19c2f650"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()

console.log(firebase.name);
console.log(firebase.database());
 
 

  