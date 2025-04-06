import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD3vja6xNPCdzaIBWDOknBUlofjd8LZ8pI',
  authDomain: 'hilalpines-2830c.firebaseapp.com',
  databaseURL: 'https://hilalpines-2830c-default-rtdb.firebaseio.com',
  projectId: 'hilalpines-2830c',
  storageBucket: 'hilalpines-2830c.firebasestorage.app',
  messagingSenderId: '690836755262',
  appId: '1:690836755262:web:19ca54c6baf684a05d926f',
  measurementId: 'G-LDHHNHPN84',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
