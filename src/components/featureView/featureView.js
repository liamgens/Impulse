import React from 'react';
import Feature from '../feature/feature';
import mainWindowStyle from '../app/app.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

let ID = 0;
let FEATURE = "";

class FeatureView extends React.Component {

    renderFeatures() {
        return this.props.features.map((feature) => {
            return (
                <Feature key={feature.id} id={feature.id} />
            );
        });
    }

    render() {
        return (
            <div className={mainWindowStyle.featureView}>
                {this.renderFeatures()}
                <div className={mainWindowStyle.newFeature}>
                    <input ref={node => {
                        FEATURE = node;
                    }}></input>
                    <button onClick={this.props.addFeature}>Add Feature</button>
                </div>
            </div>
        )
    }
}

const addFeature = () => {
    return {
        type: "ADD_FEATURE",
        id: ID++,
        title: FEATURE.value
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