import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVLbKNX0zcxocHR53COiZJtmP5Q6hb8D4",
    authDomain: "netninjamarioplan-45516.firebaseapp.com",
    databaseURL: "https://netninjamarioplan-45516.firebaseio.com",
    projectId: "netninjamarioplan-45516",
    storageBucket: "netninjamarioplan-45516.appspot.com",
    messagingSenderId: "722605425288",
    appId: "1:722605425288:web:8ce1694d62f237642f953d",
    measurementId: "G-TMCXNH439P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;