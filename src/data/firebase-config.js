import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAYyW8xSgHhxfqASZMcS1z-WoBBKzQ_BY0',
  authDomain: 'go-away-bullies.firebaseapp.com',
  projectId: 'go-away-bullies',
  storageBucket: 'go-away-bullies.appspot.com',
  messagingSenderId: '455109609482',
  appId: '1:455109609482:web:c53def8c0f20cca6ef37f3',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, storage };
