var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });

  it('should add todo to state', () => {
    var text = 'test';
    var todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(text);

    expect(todoApp.state.todos[0].text).toBe(text);
  });

  it('should toggle todo completed', () => {
    var todo = { id: 1, text: 'test', completed: false };
    var todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

    todoApp.setState({ todos: [todo] });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todo.id);

    expect(todoApp.state.todos[0].completed).toBe(true);

  });

});
