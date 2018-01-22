import React from 'react';
import Feature from '../feature/feature';
import AddButton from '../addButton/addButton';
import mainWindowStyle from '../app/app.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

let ID = 0;
let FEATURE = "";

class FeatureView extends React.Component {

    renderFeatures() {
        return this.props.features.map((feature, index) => {
            return (
                <Feature key={index} id={index} />
            );
        });
    }

    render() {
        return (
            <div>
                <div className={mainWindowStyle.applicationHeader}>
                    <AddButton onClick={this.props.addFeature} />
                </div>
                <div className={mainWindowStyle.featureView}>
                    {this.renderFeatures()}
                </div>
            </div>
        )
    }
}

const addFeature = () => {
    return {
        type: "ADD_FEATURE",
        title: ""
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