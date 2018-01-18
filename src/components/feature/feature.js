import React from 'react';
import FeatureStyle from './feature.css';
import Task from '../task/task';
import ProgessBar from '../progressBar/progressBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// // function that calculates the percentage of completion for a feature
// const getPercentageDone = (feature) => {
//     let count = feature.tasks.length
//     let completed = 0

//     for (var task in feature.tasks) {
//         if (feature.tasks[task].completed) {
//             completed += 1
//         }
//     }

//     let percentage = Math.ceil((completed / count) * 100)
//     return percentage
// }

let FEATURE_ID;
let TASK = "";

class Feature extends React.Component {

    renderTasks() {
        return this.props.features[FEATURE_ID].tasks.map((a, index) => {
            return (
                <Task key={index} id={index} fid={FEATURE_ID} />
            );
        });
    }

    render() {
        FEATURE_ID = this.props.id
        return (
            <div className={FeatureStyle.featureContainer}>
                <div className={FeatureStyle.featureHeading}>
                    {this.props.features[this.props.id].title}
                </div>
                <div className={FeatureStyle.taskView}>
                    {this.renderTasks()}
                    <input ref={node => {
                        TASK = node;
                    }}></input>
                    <button onClick={this.props.addTask}>Add Task</button>

                </div>
                <div className={FeatureStyle.featureToolbar}>
                    {/* <ProgessBar percentage={getPercentageDone(this.props.feature)} /> */}
                </div>
            </div>
        )
    }
}

const addTask = () => {
    return {
        type: "ADD_TASK",
        id: FEATURE_ID,
        task: TASK.value
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