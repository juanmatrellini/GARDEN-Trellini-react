import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCKcTwAgCpgBHN7-8dUxwurno0ZDJ03EA",
  authDomain: "garden-trellini-r.firebaseapp.com",
  projectId: "garden-trellini-r",
  storageBucket: "garden-trellini-r.appspot.com",
  messagingSenderId: "562961172295",
  appId: "1:562961172295:web:5c94e0fb44700111deae62"
};

const app = initializeApp(firebaseConfig);
const db =getFirestore(app);

export default db