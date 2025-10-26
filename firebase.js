// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRJWxKrUMpSd8yUPnPzPcBGu3tlkklCok",
  authDomain: "jobjoint-92df5.firebaseapp.com",
  projectId: "jobjoint-92df5",
  storageBucket: "jobjoint-92df5.firebasestorage.app",
  messagingSenderId: "457361834077",
  appId: "1:457361834077:web:3101303905ad8c39114db4",
  measurementId: "G-5SMBJLS37B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
