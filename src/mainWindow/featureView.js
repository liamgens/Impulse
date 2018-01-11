import React from 'react'
import mainWindowStyle from './mainWindow.css'

export default class FeatureView extends React.Component {
    render() {
        return (
            <div className={mainWindowStyle.featureView}>
                Feature View
            </div>
        )
    }
}