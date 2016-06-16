var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require('ToDoApp');

var actions = require('actions');
import firebase, {firebaseRef} from 'app/firebase/'
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// var unsubscribe = store.subscribe(() => {
//   var state = store.getState();
//
//   console.log('Search: ', state.searchText, state.showCompleted);
//   console.log('ToDos: ', state.todos.length);
//   if(state.todos.length > 0){
//     console.log(state.todos[0]);
//   }
//
//   TodoAPI.setTodos(state.todos);
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
//   store.dispatch(actions.startAddTodos());
// });
//
// todosRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
//   store.dispatch(actions.startAddTodos());
// });
//
// todosRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
//   store.dispatch(actions.startAddTodos());
// });

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById('app')
);
