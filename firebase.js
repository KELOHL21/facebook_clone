import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
   apiKey: "AIzaSyD1PF-vhPVcD4xv7fPMLB6rxxuMrgf1q4c",
   authDomain: "facebook-clone-c615f.firebaseapp.com",
   projectId: "facebook-clone-c615f",
   storageBucket: "facebook-clone-c615f.appspot.com",
   messagingSenderId: "347084007483",
   appId: "1:347084007483:web:7393a0930363d2c332941e"
 };

//  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
 const app =
 ! firebase.apps.length 
 ? firebase.initializeApp(firebaseConfig) 
 : firebase.app();

 const db = app.firestore();

 const storage = firebase.storage();

 export { db , storage};