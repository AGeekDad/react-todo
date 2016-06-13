var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>
            <p>ToDo Rendered</p>
            {props.children}
      </div>
    );
  }
});

module.exports = Main;
