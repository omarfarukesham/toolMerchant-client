
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBlt1FWI1DkqPJ0iNfOSMe5MMjoXyL5g8",
  authDomain: "toolmarchent.firebaseapp.com",
  projectId: "toolmarchent",
  storageBucket: "toolmarchent.appspot.com",
  messagingSenderId: "820835030234",
  appId: "1:820835030234:web:3f2957cb6f9a12c84141e3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };