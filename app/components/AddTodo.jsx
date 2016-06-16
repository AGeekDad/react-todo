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
      this.props.dispatch(actions.addTodo(todoText));
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

export default connect()(AddTodo);
