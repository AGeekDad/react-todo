import firebase from 'firebase';

try {

  var config = {
    apiKey: "AIzaSyAAwpc7LPIggYUgK6TbJjltRXGNwWPpYTw",
    authDomain: "react-todo-60db2.firebaseapp.com",
    databaseURL: "https://react-todo-60db2.firebaseio.com",
    storageBucket: "react-todo-60db2.appspot.com",
  };

  firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
