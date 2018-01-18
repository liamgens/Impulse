import React from 'react';
import FeatureStyle from './feature.css';
import Task from '../task/task';
import ProgessBar from '../progressBar/progressBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// let FEATURE_ID;
// let TASK = "";

class Feature extends React.Component {

    renderTasks() {
        return this.props.features[this.props.id].tasks.map((a, index) => {
            return (
                <Task key={index} id={index} fid={this.props.id} />
            );
        });
    }

    calculatePercentage() {
        let numberOfTasks = this.props.features[this.props.id].tasks.length;
        let completed = 0;

        for (var task in this.props.features[this.props.id].tasks) {
            if (this.props.features[this.props.id].tasks[task].completed === true) {
                completed += 1;
            }
        }

        let percentage = Math.ceil((completed / numberOfTasks) * 100);

        return isNaN(percentage) ? 0 : percentage;
    }

    render() {
        return (
            <div className={FeatureStyle.featureContainer}>
                <div className={FeatureStyle.featureHeading}>
                    {this.props.features[this.props.id].title}
                </div>
                <div className={FeatureStyle.taskView}>
                    {this.renderTasks()}
                    <input ref={node => {
                        this.task = node;
                    }}></input>
                    <button onClick={() => this.props.addTask(this.props.id, this.task)}>Add Task</button>

                </div>
                <div className={FeatureStyle.featureToolbar}>
                    <ProgessBar percentage={this.calculatePercentage()} />
                </div>
            </div>
        )
    }
}

const addTask = (featureID, task) => {
    return {
        type: "ADD_TASK",
        id: featureID,
        task: task.value
    }
}

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTask, }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Feature);