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
    completed: false
}

// feature that contains tasks
const feature = {
    title: "Feature",
    tasks: [task1, task2, task3]
}

export default class FeatureView extends React.Component {
    render() {
        return (
            <div className={mainWindowStyle.featureView}>
                <Feature feature={feature} />
            </div>
        )
    }
}