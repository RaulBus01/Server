import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { FIREBASECONFIG } from "./firebase-config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: FIREBASECONFIG.APIKEY,
  projectId: FIREBASECONFIG.PROJECTID,
  storageBucket: FIREBASECONFIG.STORAGEBUCKET,
  messagingSenderId: FIREBASECONFIG.MESSAGINGSENDERID,
  appId: FIREBASECONFIG.APPID,
  measurementId: FIREBASECONFIG.MEASUREMENTID
};


const app = initializeApp(config);
const auth = getAuth(app);
export {auth,app}