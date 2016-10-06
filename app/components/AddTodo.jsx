var React = require('react');

var AddTodo = React.createClass({
  onTodoSubmit: function(e){
    e.preventDefault();
    var newTodo = this.refs.newTodo.value;
    if(newTodo.length > 0){
      this.refs.newTodo.value = '';
      this.props.onTodoSubmit(newTodo);
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onTodoSubmit}>
          <input type="text" ref="newTodo" placeholder="Add New Todo" />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
