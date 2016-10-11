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
    it('should set valid todos array', () => {
      var todos = [{
        id: 14,
        text: 'Test todo',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var localTodos = JSON.parse(localStorage.getItem('todos'));
      expect(localTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad local data', () => {
      var localTodos = TodoAPI.getTodos();
      expect(localTodos).toEqual([]);
    });

    it('should return todo array if valid in local', () => {
      var todos = [{
        id: 14,
        text: 'Test todo',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var localTodos = TodoAPI.getTodos();
      expect(localTodos).toEqual(todos);
    });
  });
});
