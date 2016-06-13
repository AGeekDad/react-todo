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
        { id: uuid(), text: 'code app' },
        { id: uuid(), text: 'test app' }
      ]
    };
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [...this.state.todos,
        { id: uuid(), text: text }
      ]
    });
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
            <TodoList todos={todos} />
            <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = ToDoApp;
