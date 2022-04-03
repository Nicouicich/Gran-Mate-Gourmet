// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb26sLgqQV8Y1LT08dxa2-eaZCSmIPF2M",
  authDomain: "gran-mate-gourmet.firebaseapp.com",
  projectId: "gran-mate-gourmet",
  storageBucket: "gran-mate-gourmet.appspot.com",
  messagingSenderId: "335482910036",
  appId: "1:335482910036:web:fe7837ee34b5152a0904c1",
  measurementId: "G-PG8Q2TZBGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const getFirestoreApp = () => {
  return app
}