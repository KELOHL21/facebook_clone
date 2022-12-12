import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyD1PF-vhPVcD4xv7fPMLB6rxxuMrgf1q4c",
   authDomain: "facebook-clone-c615f.firebaseapp.com",
   projectId: "facebook-clone-c615f",
   storageBucket: "facebook-clone-c615f.appspot.com",
   messagingSenderId: "347084007483",
   appId: "1:347084007483:web:7393a0930363d2c332941e"
 };

//  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
 const app =!getApp().length ? initializeApp(firebaseConfig) : getApps();

 const db = getFirestore();

 const storage = getStorage();


 export default app;
 export { db , storage};