import firebase from "firebase";

const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBucket:,
  messagingSenderId:,
  appId: ,
  measurementId: 
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
