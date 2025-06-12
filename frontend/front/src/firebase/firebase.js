import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLU79vPwouxYfFb8sPBOImnJdxCR4lMTU",
  authDomain: "interviewguruauth.firebaseapp.com",
  projectId: "interviewguruauth",
  storageBucket: "interviewguruauth.firebasestorage.app",
  messagingSenderId: "1075574715326",
  appId: "1:1075574715326:web:2997cda175c1677fe43fef",
  measurementId: "G-EFWMVK4DEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export { auth, db };