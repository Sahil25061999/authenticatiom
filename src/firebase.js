import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: 'AIzaSyCJpFdmIxsSnb0BNzNhRCooTwP6C4NpnwQ',
  authDomain: 'authentication-developme-a42d7.firebaseapp.com',
  projectId: 'authentication-developme-a42d7',
  storageBucket: 'authentication-developme-a42d7.appspot.com',
  messagingSenderId: '747052450989',
  appId: '1:747052450989:web:5ae5b6bf10a8cffa19f224',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };
export default app;
