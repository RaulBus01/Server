import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASECONFIG } from "./firebase-config";

const config = {
  apiKey: FIREBASECONFIG.APIKEY,
  authDomain: FIREBASECONFIG.AUTHDOMAIN,
  projectId: FIREBASECONFIG.PROJECTID,
  storageBucket: FIREBASECONFIG.STORAGEBUCKET,
  messagingSenderId: FIREBASECONFIG.MESSAGINGSENDERID,
  appId: FIREBASECONFIG.APPID,
  measurementId: FIREBASECONFIG.MEASUREMENTID
};

const app = initializeApp(config);
const auth = getAuth(app);

export {auth,app}