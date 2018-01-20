import React from 'react';
import ApplicationHeader from '../applicationHeader/applicationHeader';
import FeatureView from '../featureView/featureView';
import ApplicationFooter from '../applicationFooter/applicationFooter';

export default class MainWindow extends React.Component {
    render() {
        return (
            <div>
                {/* <ApplicationHeader /> */}
                <FeatureView />
                {/* <ApplicationFooter /> */}
            </div>
        );
    }
}
