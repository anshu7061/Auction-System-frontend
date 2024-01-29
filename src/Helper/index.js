// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzFXF2hRSEj8YHMh6H7NrIcni3xnkg-zk",
  authDomain: "auction-f7cb8.firebaseapp.com",
  projectId: "auction-f7cb8",
  storageBucket: "auction-f7cb8.appspot.com",
  messagingSenderId: "926852409187",
  appId: "1:926852409187:web:e26216e92f7efdce4ad556",
  measurementId: "G-RFHPYHCN7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




export {analytics}