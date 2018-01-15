import React from 'react';
import FeatureStyle from './feature.css';
import Task from '../task/task';
import ProgessBar from '../progressBar/progressBar';

// function that calculates the percentage of completion for a feature
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


export default class Feature extends React.Component {

    // render all the tasks in the feature
    // renderTasks() {
    //     let tasksToRender = []
    //     for (let i = 0; i < this.props.feature.tasks.length; i++) {
    //         let task = this.props.feature.tasks[i]
    //         tasksToRender.push(<Task />)
    //     }
    //     return tasksToRender
    // }

    render() {
        return (
            <div className={FeatureStyle.featureContainer}>
                <div className={FeatureStyle.featureHeading}>
                    {this.props.title}
                </div>
                <div className={FeatureStyle.taskView}>
                    {/* {this.renderTasks()} */}
                </div>
                <div className={FeatureStyle.featureToolbar}>
                    {/* <ProgessBar percentage={getPercentageDone(this.props.feature)} /> */}
                </div>
            </div>
        )
    }
}