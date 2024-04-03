import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDz7x6HPTzD6SzMyi5G-IANUoSE1_vI8rk",
  authDomain: "deliveloz-340a3.firebaseapp.com",
  projectId: "deliveloz-340a3",
  storageBucket: "deliveloz-340a3.appspot.com",
  messagingSenderId: "64849940015",
  appId: "1:64849940015:web:f5ac1d180c333f41f000da"
};

const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase)
// export default appFirebase;