import firebase from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAOhg8EYpWM0oqeSkafNbL_fvcbf6GO9Lg',
  authDomain: 'jobscodefair.firebaseapp.com',
  databaseURL: 'https://jobscodefair.firebaseio.com',
  projectId: 'jobscodefair',
  storageBucket: '',
  messagingSenderId: '383273339239',
  appId: '1:383273339239:web:4112b581eb3232b8'
}
// Initialize Firebase
const firebaseDB = firebase.initializeApp(firebaseConfig)
export default firebaseDB
