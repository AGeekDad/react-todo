import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAAwpc7LPIggYUgK6TbJjltRXGNwWPpYTw",
  authDomain: "react-todo-60db2.firebaseapp.com",
  databaseURL: "https://react-todo-60db2.firebaseio.com",
  storageBucket: "react-todo-60db2.appspot.com",
};
firebase.initializeApp(config);


var firebaseRef = firebase.database().ref();

// Initialize data
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    age: 43,
    name: 'Scott'
  }
}).then(() => {
  console.log('set complete');
}, (e) => {
  console.log('set failed');
}
);

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

// Add new array item
var newNoteRef = notesRef.push({
  text: 'sample'
});

newNoteRef.update({ text: 'updated'});

newNoteRef.remove();

// firebaseRef.child('app').set({
//   name: 'Todo Application'
// })

// Update
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// })
// // OR
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// })

// Removing
//firebaseRef.remove('user/age');
//firebaseRef.update('user').({ age: null });

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('once', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('once fail', e);
// })
//
// var logData = (snapshot) => {
//   console.log('on', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.update({isRunning: true});
// firebaseRef.off(logData);
//
// firebaseRef.child('app').on('value', (snapshot) => {
//   console.log('on app', snapshot.key, snapshot.val());
// });
// firebaseRef.update({'app/name': 'updated app name'});
