import React, { Component } from 'react';
import Form from "./Form"
import Cross from "./Cross"

class List extends Component {
    state = {
        todos: [],
        todoToShow: "all",

    };
    addTodo = todo => {
        if (todo.text) {
            this.setState({
                todos: [todo, ...this.state.todos]
            })
        }
    }
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        complete: !todo.complete
                    }
                }
                else {
                    return todo
                }

            })
        })
    }
    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }

    handleDelete = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });

    };
    removeAll = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.text)
        })
    }
    render() {

        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        }
        else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        }
        else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }
        return (
            <div className="shift">
                <div className="Form1 Form2 ">
                    Todos left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div className="Form1">
                    <button onClick={() => this.updateTodoToShow("all")} className="button4 App1">All</button>
                    <button onClick={() => this.updateTodoToShow("active")} className="button4 App1">Active</button>
                    <button onClick={() => this.updateTodoToShow("complete")} className="button4 App1">Completed</button>
                    <button onClick={this.removeAll} className="button4 App1">Clear all </button>
                </div>
                <Form onSubmit={this.addTodo} />
                {todos.map(todo => (<Cross key={todo.id}
                    todo={todo}
                    toggleComplete={() => this.toggleComplete(todo.id)}
                    onDelete={() => this.handleDelete(todo.id)}

                />))}


            </div>)

    }

}
export default List;