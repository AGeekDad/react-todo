var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require('ToDoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Search: ', state.searchText, state.showCompleted);
  console.log('ToDos: ', state.todos.length);
  if(state.todos.length > 0){
    console.log(state.todos[0]);
  }

  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();

store.dispatch(actions.addTodos(initialTodos));

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
