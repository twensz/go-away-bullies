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
// const firebaseConfig = {
//   apiKey: 'AIzaSyDIs8QmzQxSQOrN_NamPgjU5cM5MD5yWH0',
//   authDomain: 'test-firebase-edfa9.firebaseapp.com',
//   projectId: 'test-firebase-edfa9',
//   storageBucket: 'test-firebase-edfa9.appspot.com',
//   messagingSenderId: '596854476641',
//   appId: '1:596854476641:web:987ce15ecd0a86e81abf20',
//   measurementId: 'G-FHLW71NCKN',
// };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, storage };
