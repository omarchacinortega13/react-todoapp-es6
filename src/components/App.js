import React from 'react';
import CreateTodo from './Create-Todo'
import TodosLists from './TodosList'
import _ from 'lodash';

const todos = [
  {
    task       : 'make React Tutorial',
    isCompleted: false
  },
  {
    task       : 'eat dinner',
    isCompleted: true
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todos
    };
  }


  render() {
    return (
      <div>
        <h1>Todos App</h1>
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <TodosLists todos={this.state.todos} toggleTask={this.toggleTask.bind(this)}/>
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({
      todos: this.state.todos
    })
  }

  createTask(task) {
    console.log('hi task ', task);
    this.state.todos.push({
      task: task,
      isCompleted:false
    });
    this.setState({
      todo: this.state.todos
    })
  }
}

export default App

