var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  handleAddTodo: function(text){
    alert('New Todo: ' + text)
  },
  getInitialState: function(){
    return ({
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    });
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onTodoSubmit={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
