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
      <div className="container__footer">
        <form onSubmit={this.onTodoSubmit}>
          <input type="text" ref="newTodo" placeholder="Add New Todo" />
          <button className="button primary">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
