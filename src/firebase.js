import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBe6dMibL2-H6NaBpKgnNzqhwv1yHVvZbE",
  authDomain: "jetkirkg-ee5af.firebaseapp.com",
  projectId: "jetkirkg-ee5af",
  storageBucket: "jetkirkg-ee5af.appspot.com",
  messagingSenderId: "110764422141",
  appId: "1:110764422141:web:e7fab1c9a9a26c83b91f94",
  measurementId: "G-L2RK46KQ5S",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
