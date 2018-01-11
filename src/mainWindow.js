import React from 'react'
import ApplicationHeader from './mainWindow/applicationHeader'
import FeatureView from './mainWindow/featureView'
import ApplicationFooter from './mainWindow/applicationFooter'

export default class MainWindow extends React.Component {
    render() {
        return (
            <div>
                <ApplicationHeader />
                <FeatureView />
                <ApplicationFooter />
            </div>
        )
    }
}