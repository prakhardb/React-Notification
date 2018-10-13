import Rebase from 're-base';
import firebase from 'firebase';

const  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNwzE4Sy-zS37oCKfUfFV3rv1btm0fQQc",
    authDomain: "push-notification-1353f.firebaseapp.com",
    databaseURL: "https://push-notification-1353f.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//Named export
export { firebaseApp };

// this is a default export

export default base;