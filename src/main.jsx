import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrTGYljxgMhN3jPfMerJ2F-U55RYG_J7g",
  authDomain: "react-xiaomi.firebaseapp.com",
  projectId: "react-xiaomi",
  storageBucket: "react-xiaomi.firebasestorage.app",
  messagingSenderId: "223563423666",
  appId: "1:223563423666:web:9df4da447d0935be94ceab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
