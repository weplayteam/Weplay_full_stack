import firebase from 'firebase/app';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCUW5-DvZrZLS_l3Xo5D3tsylSyx7iECVU",
    authDomain: "weplaywebsite-df154.firebaseapp.com",
    databaseURL: "https://weplaywebsite-df154.firebaseio.com",
    projectId: "weplaywebsite-df154",
    storageBucket: "weplaywebsite-df154.appspot.com",
    messagingSenderId: "438050842700",
    appId: "1:438050842700:web:c68fa340ce8435d5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;