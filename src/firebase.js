import * as firebase from 'firebase';


const config =  {
  apiKey: "AIzaSyBj88r2J1SlgdSGJoVB1RkeZFycNGELXPo",
  authDomain: "real-share.firebaseapp.com",
  databaseURL: "https://real-share.firebaseio.com",
  projectId: "real-share",
  storageBucket: "real-share.appspot.com",
  messagingSenderId: "49317521904"
};

export const firebaseApp = firebase.initializeApp(config);
export const listRef = firebase.database().ref('lists');
export const boughtItemref= firebase.database().ref('boughtItems');
