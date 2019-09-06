import firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBNBn_kmowGuqyMURykbEjCb-p8F5o--Z0",
  authDomain: "crwn-db-97364.firebaseapp.com",
  databaseURL: "https://crwn-db-97364.firebaseio.com",
  projectId: "crwn-db-97364",
  storageBucket: "",
  messagingSenderId: "852583775900",
  appId: "1:852583775900:web:23e59c80b6433d8906f759"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase