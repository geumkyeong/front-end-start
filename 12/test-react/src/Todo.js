import React, { Component } from 'react';
import to
class Todo extends Component {
    state = {
        list: [
            {
                id: 1,
                title: '할일할일1'
            },
            {
                id: 2,
                title: '할일할일2'
            }
        ]
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({text: event.target.value});
    }

    checkTodo = () => {

    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <input type="text" onChange={this.handleChange}></input>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                                return(
                                    <li key={index}>{item.title}></li>
                                )
                            }
                        )
                    }
                    <li>할일</li>
                    <li>할일</li>
                    <li>할일</li>
                    <li>할일</li>
                </ul>
            </div>
        );
    }
}

export default Todo;