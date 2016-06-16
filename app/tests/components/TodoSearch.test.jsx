var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var { TodoSearch } = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('Search text', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.searchText.value = 'search';
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith({
      type: 'SET_SEARCH_TEXT',
      searchText: 'search'
    });
  });

  it('Search text blank, do not show completed', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_SHOW_COMPLETED'
    });
  });

});
