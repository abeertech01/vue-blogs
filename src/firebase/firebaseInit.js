import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCrAv-x_P7feBz2_qpxq81fCk_hnMBLKpI",
  authDomain: "vueblogs-abeer.firebaseapp.com",
  projectId: "vueblogs-abeer",
  storageBucket: "vueblogs-abeer.appspot.com",
  messagingSenderId: "46144527882",
  appId: "1:46144527882:web:f1079b0ef4827a20e389f3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp }
export default firebaseApp.firestore();