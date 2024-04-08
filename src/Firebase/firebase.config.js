// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIVXW858pAopn6K63IOzT4hc9HOwvs4Do",
  authDomain: "assignmentnine-ecc54.firebaseapp.com",
  projectId: "assignmentnine-ecc54",
  storageBucket: "assignmentnine-ecc54.appspot.com",
  messagingSenderId: "889257250252",
  appId: "1:889257250252:web:ff128f646a25276cfd2169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
