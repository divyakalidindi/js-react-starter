import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBBICwEy64U4SEXcUDF5qq-5kJfaepseJE',
  authDomain: 'react-app-7b65f.firebaseapp.com',
  databaseURL: 'https://react-app-7b65f.firebaseio.com',
  storageBucket: 'react-app-7b65f.appspot.com',
};
firebase.initializeApp(config);

const database = firebase.database();

// notes
export function fetchNotes(callback) {
  database.ref('notes').on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

export function delNotes(id) {
  database.ref('notes').child(id).remove(); // update similarly
// push doesn't take an id, but returns a new auto-generated one
}

export function makeNotes(note) {
  database.ref('notes').push(note);
}
//
// // update id?
// export function updateText(note, id, updatedText) {
//   database.ref('notes').child(id).update({ text: updatedText });
// }
//
// export function moveNotes(x, y, id, ui) {
//   database.ref('notes').child(id).update({ x: ui.x, y: ui.y });
// }

// { x: ui.x, y: ui.y, text: updatedText }
export function updateNotes(id, fields) {
  database.ref('notes').child(id).update(fields);
}
