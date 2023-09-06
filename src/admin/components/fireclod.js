import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB0Ax5X39U3hjMdWA2lKY-CJ47CNoK8v4M",
  authDomain: "shl11-3adfe.firebaseapp.com",
  databaseURL: "https://shl11-3adfe.firebaseio.com",
  projectId: "shl11-3adfe",
  storageBucket: "shl11-3adfe.appspot.com",
  messagingSenderId: "769105856871",
  appId: "1:769105856871:web:f45207f79a2fef036287c2",
  measurementId: "G-QQZ5QHGK6M"
};

export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)