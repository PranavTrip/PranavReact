
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD8kyBMSO6Dr6FQLuM8TAmNi7gZeWzOLpY",
  authDomain: "portfoliopranav-81dc0.firebaseapp.com",
  projectId: "portfoliopranav-81dc0",
  storageBucket: "portfoliopranav-81dc0.appspot.com",
  messagingSenderId: "287303351768",
  appId: "1:287303351768:web:4b634600d44aaca9b0c6ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db=getFirestore(app);
export {db};