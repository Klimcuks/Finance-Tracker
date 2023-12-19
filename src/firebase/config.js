import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAIT7nCdqq80VZ6Sje7dH3oZ8pno2XM6K0",
  authDomain: "mymoney-ddb77.firebaseapp.com",
  projectId: "mymoney-ddb77",
  storageBucket: "mymoney-ddb77.appspot.com",
  messagingSenderId: "93227607478",
  appId: "1:93227607478:web:b6991ddadda6e1d073cd17"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }