
import firebase  from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDT1EMbaydPUIAofBxTm6sFHRIxAH73Nx0",
    authDomain: "cooking-wizard-183b1.firebaseapp.com",
    projectId: "cooking-wizard-183b1",
    storageBucket: "cooking-wizard-183b1.appspot.com",
    messagingSenderId: "1073861632244",
    appId: "1:1073861632244:web:00cdc3c78818eb1ba1fea1"
  };

  firebase.initializeApp(firebaseConfig)

const projectFirestore =  firebase.firestore()

export { projectFirestore }