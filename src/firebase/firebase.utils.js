import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD9LOcW9rKIZS7I9vjyb2APgy3CqEQp7uk",
    authDomain: "crwn-db-a67fb.firebaseapp.com",
    projectId: "crwn-db-a67fb",
    storageBucket: "crwn-db-a67fb.appspot.com",
    messagingSenderId: "200343686327",
    appId: "1:200343686327:web:b13f959e0b1e9228e21132",
    measurementId: "G-Y1XXBHQGQB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;