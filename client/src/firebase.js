// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpR3A9F8xFft0ePHbw9lWRzKGXI81dBrE",
  authDomain: "twitter-clone-2be2e.firebaseapp.com",
  projectId: "twitter-clone-2be2e",
  storageBucket: "twitter-clone-2be2e.appspot.com",
  messagingSenderId: "190602315293",
  appId: "1:190602315293:web:a94233e6f0cb99233268f4",
  measurementId: "G-JJ8LB5N4YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;