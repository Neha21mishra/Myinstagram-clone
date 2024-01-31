import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

firebase.initializeApp({
  apiKey: "AIzaSyCSSPEa-lxJPuugz1K9Y8k15qaOsajyDH0",
  authDomain: "instaclone-393fa.firebaseapp.com",
  projectId: "instaclone-393fa",
  storageBucket: "instaclone-393fa.appspot.com",
  messagingSenderId: "425264735419",
  appId: "1:425264735419:web:95d74cc41ec9498de5759e"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};

