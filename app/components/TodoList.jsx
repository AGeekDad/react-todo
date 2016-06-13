var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var { todos } = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
          return (
              <Todo key={todo.id} {...todo} />
          )
      });
    };

    return (
      <div>
            <p>ToDoList Rendered</p>
            {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
