import firebase from "firebase";

import 'firebase/storage'; 
const firebaseConfig = {
    apiKey: "AIzaSyBp-Hoh8uva29j1_ON6YoL8Sil-99ddnjA",
    authDomain: "linkedin-clone-7e6b3.firebaseapp.com",
    projectId: "linkedin-clone-7e6b3",
    storageBucket: "linkedin-clone-7e6b3.appspot.com",
    messagingSenderId: "744166056409",
    appId: "1:744166056409:web:2fdfe2aa800616b4cbb9c8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export{auth , provider, storage};
  export default db;
