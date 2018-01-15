import React from 'react'
import Feature from '../feature/feature'
import mainWindowStyle from '../app/app.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// // dummy data for now
// // tasks
// const task1 = {
//     description: "task1",
//     completed: true
// }

// const task2 = {
//     description: "task2",
//     completed: false
// }

// const task3 = {
//     description: "task3",
//     completed: false
// }

// // feature that contains tasks
// const feature = {
//     title: "Feature",
//     tasks: [task1, task2, task3]
// }

export class FeatureView extends React.Component {

    renderFeatures() {
        return this.props.features.map((feature) => {
            return (
                <Feature key={feature.id} title={feature.title} />
            );
        });
    }

    render() {
        return (
            <div className={mainWindowStyle.featureView}>
                <button onClick={this.props.addFeature}>Add Feature</button>
                {/* <Feature /> */}
                {this.renderFeatures()}
            </div>
        )
    }
}

const addFeature = (feature) => {
    return {
        type: "ADD_FEATURE",
        id: 1,
        title: "TEST"
    }
}

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ addFeature, }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FeatureView);