import React from 'react';
import { Bootstrap, Grid, Row, Col, Panel } from 'react-bootstrap';
import './task.css';
import './checkbox.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import Checkbox from './checkbox';


export default class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task-panel">
                <div className="task-heading">
                    <TaskItem>To Do List</TaskItem>
                </div>
                <div className="task-body">
                    <TaskItem>Get Laid</TaskItem>
                    <TaskItem>Go Shopping</TaskItem>
                    <TaskItem>Fuck my titties</TaskItem>
                </div>
            </div>
        )
    }
}





class TaskItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.children,
            completed: false
        }
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    }

    handleCheckboxClick() {
        this.setState({
            completed: !this.state.completed
        })
    }

    render() {
        return (
            <div className="main-task">
                <Checkbox completed={this.state.completed} onClick={this.handleCheckboxClick} />
                {this.state.completed ?
                    <div className="task-complete">{this.props.children}</div> :
                    <div>{this.props.children}</div>}
            </div>
        )
    }
}





class Checkbox extends React.Component {
    render() {
        return (
            <div className="checkboxed" onClick={this.props.onClick}>
                <ReactCSSTransitionGroup
                    transitionName="toggle"
                    transitionEnterTimeout={150}
                    transitionLeaveTimeout={150}>
                    {!this.props.completed ? null : <div className="toggle-base">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                            <path d="M80.467,28.54c-1.562-1.562-4.096-1.562-5.658,0L40.868,62.48L27.194,48.806c-1.562-1.562-4.095-1.562-5.657,0 c-1.562,1.562-1.562,4.095,0,5.657L38.04,70.966c0.781,0.781,1.805,1.172,2.829,1.172s2.047-0.391,2.829-1.172l36.77-36.769 C82.028,32.634,82.028,30.102,80.467,28.54z"
                            />
                        </svg></div>}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}