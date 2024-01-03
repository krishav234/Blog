import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjVrySSLPvmPnP7EzZLoe0nmoBdG1A5ZA",
  authDomain: "blog-app-14fdc.firebaseapp.com",
  projectId: "blog-app-14fdc",
  storageBucket: "blog-app-14fdc.appspot.com",
  messagingSenderId: "721974448589",
  appId: "1:721974448589:web:af042e96bb112e71ff3484",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
