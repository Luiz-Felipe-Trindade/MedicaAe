
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAupsqMx2UfogXlzvMqtwQ1hyCt5t7LfUY",
  authDomain: "medicae-d5892.firebaseapp.com",
  databaseURL: "https://medicae-d5892-default-rtdb.firebaseio.com",
  projectId: "medicae-d5892",
  storageBucket: "medicae-d5892.appspot.com",
  messagingSenderId: "1037976570901",
  appId: "1:1037976570901:web:1a57a34c76f63a5da2d21c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const config = getFirestore(app);

export default config;