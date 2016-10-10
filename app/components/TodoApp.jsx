var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleAddTodo: function(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  getInitialState: function(){
    return ({
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: true
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: false
        }
      ],
      showCompleted: false,
      searchText: ''
    });
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} handleToggle={this.handleToggle} />
        <AddTodo onTodoSubmit={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
