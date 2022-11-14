import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef, onValue, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZBuCT-iVCLAQSdTcVzfnnJmDZLle3Gcc",

  authDomain: "daikin-translate.firebaseapp.com",

  databaseURL: "https://daikin-translate-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "daikin-translate",

  storageBucket: "daikin-translate.appspot.com",

  messagingSenderId: "518823970107",

  appId: "1:518823970107:web:1b387addf63b250759e31e",

  measurementId: "G-ETWQ35E4R4",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export const getData = new Promise((res, rej) => {
  get(dbRef(db, "/"))
    .then((snapshot) => res(snapshot.val()))
    .catch((e) => rej(e));
});

export const setData = (data) => {
  return set(dbRef(db, "/"), data);
};
