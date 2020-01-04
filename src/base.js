import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCXYlVKwxi8zNZSw95NcZvNcjF4hDbQiYY",
    authDomain: "catch-of-today-vheckthor.firebaseapp.com",
    databaseURL: "https://catch-of-today-vheckthor.firebaseio.com",
    // projectId: "catch-of-today-vheckthor",
    // storageBucket: "catch-of-today-vheckthor.appspot.com",
    // messagingSenderId: "221997686553",
    // appId: "1:221997686553:web:04f8d8745d0a3358ad2f88",
    // measurementId: "G-1K4NCCELM1"

})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp};

export default base;