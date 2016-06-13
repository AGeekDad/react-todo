var React = require('react');

var AddTodo = require('AddTodo');
var TodoList = require('TodoList');

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
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
  render: function() {
    var { todos } = this.state;
    return (
      <div>
            <p>ToDoApp Rendered</p>
            <TodoList todos={todos} />
            <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = ToDoApp;
