import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqjYF9wt8e8Nk-RpwIFljWF2AM7zsVBW8",
  authDomain: "ruiz-sneakers.firebaseapp.com",
  projectId: "ruiz-sneakers",
  storageBucket: "ruiz-sneakers.appspot.com",
  messagingSenderId: "1091708431376",
  appId: "1:1091708431376:web:773d56c46d2688a63fee95",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => {
  return firebase.firestore(app);
};
