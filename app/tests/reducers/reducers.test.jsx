var expect = require('expect');
var df = require('deep-freeze-strict');
//If any arguments held by deep freeze are updated, the tests should fail

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
      it('should set searchText', () => {
        var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'Test searchText'
        };
        var res = reducers.searchTextReducer(df(''), df(action));
        expect(res).toEqual(action.searchText);
      });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todoText: 'Test todo text'
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.todoText);
    });

    it('should toggle complete on todo with given id', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 167
      };
      var testTodo = [{
        id: 167,
        text: 'Test todo text',
        completed: false,
        createdAt: 123456,
        completedAt: undefined
      }];
      var res = reducers.todosReducer(df(testTodo), df(action));
      expect(res[0].completed).toEqual(true);
    })
  });
});
