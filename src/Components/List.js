import React, { Component } from 'react';
import Form from "./Form"
import Cross from "./Cross"

class List extends Component {
    state = {
        todos: [],
        todoToShow: "all",
        btn:"btn1"

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
    updateTodoToShow = (param) => {
        let {type,button} = param;
        this.setState({
            todoToShow: type,
            btn: button
        })
    }

    handleDelete = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });

    };
    removeAll = (e) => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.text),
            btn:e
        })
    }
    render() {

        let todos = [];
        let btn1 = (this.state.btn === "btn1") ? "btn1":null
        let btn2 = (this.state.btn === "btn2") ? "btn2":null
        let btn3 = (this.state.btn === "btn3") ? "btn3":null
        let btn4 = (this.state.btn === "btn4") ? "btn4":null


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
                    <button onClick={() => this.updateTodoToShow({type: "all",button: "btn1"})} className={`button4 App1 ${btn1}`}>All</button>
                    <button onClick={() => this.updateTodoToShow({type: "active",button: "btn2"})} className={`button4 App1 ${btn2}`}>Active</button>
                    <button onClick={() => this.updateTodoToShow({type: "complete",button: "btn3"})} className={`button4 App1 ${btn3}`}>Completed</button>
                    <button onClick={() => this.removeAll("btn4")} className={`button4 App1 ${btn4}`}>Clear all </button>
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