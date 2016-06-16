var React = require('react');
var { connect } = require('react-redux');

var actions = require('actions');

export var TodoSearch = React.createClass({
  handleSearch: function(){
    var showCompleted =  this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.dispatch(actions.setSearchText(searchText));
    this.props.dispatch(actions.toggleShowCompleted());
  },
  render: function() {
    return (
      <div className="container__header">
        <div>
          <input type='text' ref='searchText' onChange={this.handleSearch} placeholder='Search todos' />
        </div>
        <div>
          <label>
            <input type='checkbox' ref='showCompleted' onChange={this.handleSearch} />
            Show Completed todos
          </label>
        </div>
      </div>
    );
  }
});

export default connect()(TodoSearch);
