var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit} className="">
          <input type="text" ref="todoText" placeholder="Add new To Do"/>
          <button className="button expanded success">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
