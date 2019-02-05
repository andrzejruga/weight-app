import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZsjOrn9lCif1BOrExPEMVQvxpawZxljQ",
    authDomain: "andy-weight-tracker.firebaseapp.com",
    databaseURL: "https://andy-weight-tracker.firebaseio.com",
    projectId: "andy-weight-tracker",
    storageBucket: "andy-weight-tracker.appspot.com",
    messagingSenderId: "671176989899"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;