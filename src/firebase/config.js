import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC9o8LaeYgm-QRBAJXgUtk2ZtwR2d52LX8",
    authDomain: "mymoney-project-330d1.firebaseapp.com",
    projectId: "mymoney-project-330d1",
    storageBucket: "mymoney-project-330d1.appspot.com",
    messagingSenderId: "367235066004",
    appId: "1:367235066004:web:7112b0fccbd3b1eb44ec81"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init services

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }