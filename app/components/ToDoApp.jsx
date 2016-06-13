var React = require('react');
var uuid = require('node-uuid');

var AddTodo = require('AddTodo');
var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: uuid(), text: 'code app', completed: false },
        { id: uuid(), text: 'test app', completed: true }
      ]
    };
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [...this.state.todos,
        { id: uuid(), text: text, completed: false }
      ]
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var { todos } = this.state;
    return (
      <div>
        <p>ToDoApp Rendered</p>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = ToDoApp;
