// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZkZS539EacusVcbf8Jj_ctujYMC21_RI',
  authDomain: 'house-marketplace-app-ddd22.firebaseapp.com',
  projectId: 'house-marketplace-app-ddd22',
  storageBucket: 'house-marketplace-app-ddd22.appspot.com',
  messagingSenderId: '308347642636',
  appId: '1:308347642636:web:8587d8f9a3faea4b825f29',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig)
export const db = getFirestore()
