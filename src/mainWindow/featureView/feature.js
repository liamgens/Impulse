import React from 'react'
import FeatureStyle from './feature.css'
import Task from './feature/task'

export default class Feature extends React.Component {

    render() {
        return (
            <div className={FeatureStyle.featureContainer}>
                <div className={FeatureStyle.featureHeading}>
                    {this.props.title}
                </div>
                <div className={FeatureStyle.taskView}>
                    <Task description="Code some stuff." />
                </div>
                <div className={FeatureStyle.featureToolbar}>
                    Add button & Progess Bar
                </div>
            </div>
        )
    }
}