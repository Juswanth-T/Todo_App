import React, { Component } from 'react';
import shortid from "shortid";

class Form extends Component {
    state = {
        text: '',

    }
    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: ""
        })

    }

    render() {
        return (
            <form className="Form1">
                <input
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="Enter"
                    className="Input" />
                <button onClick={this.handleSubmit} className="button4 Add App1" >Add </button>
            </form >
        )

    }
}
export default Form;