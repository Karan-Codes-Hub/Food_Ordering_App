import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDI8xWxBlNZuBQ0CNAmLFDIHaL8m_Flddw",
  authDomain: "uber-eats-7490d.firebaseapp.com",
  projectId: "uber-eats-7490d",
  storageBucket: "uber-eats-7490d.appspot.com",
  messagingSenderId: "1057313473665",
  appId: "1:1057313473665:web:f2e5730483b9c9ba9fb980",
  measurementId: "G-KKJBKJ5J8V"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
