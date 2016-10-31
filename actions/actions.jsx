export var setSearchText = (search) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: search
  };
};

export var addTodo = (todoText) => {
  return {
    type: 'ADD_TODO',
    todoText
  };
};
