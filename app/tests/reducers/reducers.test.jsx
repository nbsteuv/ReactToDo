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
});
