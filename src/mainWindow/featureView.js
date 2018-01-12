import React from 'react'
import Feature from './featureView/feature'
import mainWindowStyle from './mainWindow.css'

// dummy data for now
// tasks
const task1 = {
    description: "task1",
    completed: true
}

const task2 = {
    description: "task2",
    completed: false
}

const task3 = {
    description: "task3",
    completed: true
}

// feature that contains tasks
const feature = {
    title: "Feature",
    tasks: [task1, task2, task3]
}

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
    console.log(percentage + "% Completed.")
}

export default class FeatureView extends React.Component {
    render() {
        getPercentageDone(feature)
        return (
            <div className={mainWindowStyle.featureView}>
                <Feature title={feature.title} tasks={feature.tasks} />
            </div>
        )
    }
}