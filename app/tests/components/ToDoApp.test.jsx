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
    var todo = { id: 1, text: 'test', completed: false,
      createdAt: 0,
      completedAt: 123 };
    var todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

    todoApp.setState({ todos: [todo] });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todo.id);

    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  // Test that when toggle from true to false, completedAt get removed
  it('should toggle todo from completed to incompoleted', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
