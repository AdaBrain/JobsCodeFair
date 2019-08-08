import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAOhg8EYpWM0oqeSkafNbL_fvcbf6GO9Lg",
    authDomain: "jobscodefair.firebaseapp.com",
    databaseURL: "https://jobscodefair.firebaseio.com",
    projectId: "jobscodefair",
    storageBucket: "",
    messagingSenderId: "383273339239",
    appId: "1:383273339239:web:4112b581eb3232b8"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);