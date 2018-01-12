import React from 'react'
import FeatureStyle from './feature.css'
import Task from './feature/task'
import ProgessBar from './feature/progressBar'

// function that calculates the percentage of completion for a feature
function getPercentageDone(feature) {
    let count = feature.tasks.length
    let completed = 0

    for (var task in feature.tasks) {
        if (feature.tasks[task].completed) {
            completed += 1
        }
    }

    let percentage = Math.ceil((completed / count) * 100)
    return percentage
}

export default class Feature extends React.Component {
    render() {
        return (
            <div className={FeatureStyle.featureContainer}>
                <div className={FeatureStyle.featureHeading}>
                    {this.props.feature.title}
                </div>
                <div className={FeatureStyle.taskView}>
                    <Task description="Code some stuff." />
                    <Task description="Code some stuff." />
                </div>
                <div className={FeatureStyle.featureToolbar}>
                    <ProgessBar percentage={getPercentageDone(this.props.feature)} />
                </div>
            </div>
        )
    }
}