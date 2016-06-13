var React = require('react');

var AddTodo = require('AddTodo');
var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: 1, text: 'code app' },
        { id: 2, text: 'test app' },
        { id: 4, text: '3rd' }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
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
