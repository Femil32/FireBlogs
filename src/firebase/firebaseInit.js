import firebase from "firebase/app";
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAetIxCJLAkVd6NorpDLXTY5_QWBIv2j6M",
    authDomain: "fireblogs-8ae97.firebaseapp.com",
    projectId: "fireblogs-8ae97",
    storageBucket: "fireblogs-8ae97.appspot.com",
    messagingSenderId: "278868933238",
    appId: "1:278868933238:web:58a4d0c556d8da568a7d57"
};
 
const firebaseApp =  firebase.initializeApp(firebaseConfig);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {timeStamp}
export default firebaseApp