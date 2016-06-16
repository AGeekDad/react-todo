var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Login from 'Login';
import ToDoApp from 'ToDoApp';

var actions = require('actions');
import firebase, {firebaseRef} from 'app/firebase/'
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

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
    <Router history={hashHistory}>
        <Route path="/">
          <Route path="/todos" component={ToDoApp}/>
          <IndexRoute component={Login}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
