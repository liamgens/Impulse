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

                {/* <h1>{String(this.props.check.title)}</h1>

                <button onClick={() => this.props.completeTask({ title: !this.props.check.title })}>
                    Click Me!
                </button> */}

            </div>
        )
    }
}
