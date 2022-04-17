import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBtt0J-88wLojBcNQfBb3H4giRek-NnSqA',
  authDomain: 'visa-management-23512.firebaseapp.com',
  projectId: 'visa-management-23512',
  storageBucket: 'visa-management-23512.appspot.com',
  messagingSenderId: '523541929345',
  appId: '1:523541929345:web:b68af4f89f0faa1452dc80',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
