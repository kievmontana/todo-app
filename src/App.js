import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from "./AddTodo";


class App extends Component {

    state = {
        todos: [
            {id: 1, content: 'Buy some milk'},
            {id: 2, content: 'Feed the animals'},
            {id: 3, content: 'Go for a walk'},
        ]
    };

    deleteTodo = (id) => {
        let todos = this.state.todos.filter((todo) => {
            return todo.id !== id;
        });

        this.setState({
            // todos: todos // if key/value has the same names we can short:
            todos
        });
    };

    addTodo = (todo) => {
        todo.id = Math.random();

        let todos = [...this.state.todos, todo];

        this.setState({
            todos // see comment above
        })
    };

    render() {

        return (
            <div className="todo-app container">
                <h1 className="center blue-text">
                    Hey! Check your plans:
                </h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        );

    }

}

export default App;
