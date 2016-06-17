var React = require('react');
var { connect } = require('react-redux');

var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    var { dispatch } = this.props;
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Add new To Do"/>
          <button className="button expanded success">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
