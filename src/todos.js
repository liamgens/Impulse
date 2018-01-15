import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

let ID = 0;
let TODO_VALUE = "";
let TASK = "";

class Todos extends React.Component {

    createListItems() {
        return this.props.features.map((feature) => {
            return (
                <li key={feature.id}>{feature.title} - {String(feature.tasks)}</li>
            );
        });
    }

    render() {
        return (
            <div>
                <input ref={node => {
                    TODO_VALUE = node;
                }}></input>

                <button onClick={this.props.selectTodo}>Add Feature</button>

                <button onClick={this.props.removeTodo}>Remove Feature</button>

                <input ref={node => {
                    TASK = node;
                }}></input>

                <button onClick={this.props.addTask}>Add Task</button>

                <ul>
                    {this.createListItems()}
                </ul>
            </div>
        );
    }
}

const selectTodo = (todo) => {
    /*
        Action that will send a dispatch of type ADD_TODO to the store.
        The store and reducers will then perform their operation for this
        type of action.
    */

    return {
        type: "ADD_FEATURE",
        id: ID++,
        title: TODO_VALUE.value
    }
}

const removeTodo = (todo) => {
    /*
        Action that will send a dispatch of type ADD_TODO to the store.
        The store and reducers will then perform their operation for this
        type of action.
    */
    console.log(TODO_VALUE.value);
    return {
        type: "REMOVE_FEATURE",
        id: parseInt(TODO_VALUE.value)
    }
}

const addTask = (todo) => {
    return {
        type: "ADD_TASK",
        id: parseInt(TODO_VALUE.value),
        task: TASK.value

    }
}


const mapStateToProps = (state) => {
    /*
        Passes in the todos array as a prop to this container. 
        The array will be the state of todos in the store.
    */

    return {
        features: state.features
    }
}


const matchDispatchToProps = (dispatch) => {
    /*
        Binds the action creators to the dispatch.
        Passes in the action "selectTodo" as a prop called "selectTodo"
        That prop will be connected to an element's onClick listener.
    */
    return bindActionCreators({ selectTodo, removeTodo, addTask }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Todos); // exports everything as a "smart" container