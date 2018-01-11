import React from 'react';
import DropMenu from './dropmenu';
import TopBar from './topbar';
import Task from './task';


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtasks: ["code"],
      tasks: ["Feature"]
    }
  }

  add() {
    console.log("add button clicked");
    this.setState({
      tasks: this.state.tasks.concat("New Feature")
    })
  }
  render() {
    return (

      <div>
        <TopBar />
        {this.state.tasks.map((task, i) => {
          return (
            <Task subtasks={this.state.subtasks}>{task}</Task>
          );
        })}
        <Add onClick={this.add.bind(this)} />
      </div>
    )
  }
};


class Add extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    )
  }
};
