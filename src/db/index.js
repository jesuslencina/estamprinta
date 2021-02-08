import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDhcqswyx-pc1lx2NXsq5feefXJ-tCkEqM',
  authDomain: 'estamprintas.firebaseapp.com',
  projectId: 'estamprintas',
  storageBucket: 'estamprintas.appspot.com',
  messagingSenderId: '861317149118',
  appId: '1:861317149118:web:e5dc7a498c2bfefdf109ef',
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
