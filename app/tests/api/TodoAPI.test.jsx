var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'name',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actual = JSON.parse(localStorage.getItem('todos'));

      expect(actual).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var bad = { a: 'b'};
      TodoAPI.setTodos(bad);

      var actual = JSON.parse(localStorage.getItem('todos'));

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actual = TodoAPI.getTodos();

      expect(actual).toEqual([]);
    });

    it('should return empty array for bad localstorage data', () => {
      var todos = [{
        id: 23,
        test: 'name',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actual = TodoAPI.getTodos();

      expect(actual).toEqual(todos);
    });
  });

})
