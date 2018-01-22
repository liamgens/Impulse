import React from 'react';
import FeatureStyle from './feature.css';
import Task from '../task/task';
import ProgessBar from '../progressBar/progressBar';
import ProgressBarStyle from '../progressBar/progressBar.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Feature extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskToAdd: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleFeatureChange = this.handleFeatureChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleKeyPress = (event) => {
        if (event.key == 'Enter' && this.state.taskToAdd.length > 0) {
            this.props.addTask(this.props.id, this.state.taskToAdd);
            this.setState({ taskToAdd: "" });
        }
    }

    handleChange(event) {
        this.setState({ taskToAdd: event.target.value });
    }

    calculatePercentage() {
        let numberOfTasks = this.props.features[this.props.id].tasks.length;
        let completed = 0;

        for (var task in this.props.features[this.props.id].tasks) {
            if (this.props.features[this.props.id].tasks[task].completed === true) {
                completed += 1;
            }
        }

        let percentage = Math.ceil((completed / numberOfTasks) * 100);

        return isNaN(percentage) ? "0" : percentage + "%";
    }

    handleFeatureChange(event) {
        this.props.editFeature(this.props.id, event.target.value);
    }

    handleDelete() {
        this.props.deleteFeature(this.props.id);
    }

    renderTasks() {
        return this.props.features[this.props.id].tasks.map((a, index) => {
            return (
                <Task key={index} id={index} fid={this.props.id} />
            );
        });
    }

    render() {
        return (
            <div className={FeatureStyle.featureContainer}>
                <div className={FeatureStyle.featureHeading}>
                    <input className={FeatureStyle.featureInput} value={this.props.features[this.props.id].title} onChange={this.handleFeatureChange} placeholder="New Feature"></input>
                    <div className={FeatureStyle.delete} onClick={this.handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" className={FeatureStyle.deleteIcon}>
                            <path d="M81.218,9.612H63.63V2.633C63.63,1.181,62.448,0,60.996,0H39.004c-1.452,0-2.633,1.181-2.633,2.633v6.979H18.783 c-4.091,0-7.202,2.651-8.413,6.249h79.261C88.42,12.264,85.309,9.612,81.218,9.612z M59.794,9.612H40.207V5.312 c0-1.043,0.849-1.892,1.893-1.892h15.802c1.044,0,1.893,0.849,1.893,1.892V9.612z M16.382,100h67.237V18.818H16.382V100z M63.1,32.979c0-3.816,3.104-6.921,6.921-6.921c3.815,0,6.921,3.105,6.921,6.921v60.794h-4.152V33.85 c0-1.526-1.242-2.768-2.769-2.768s-2.769,1.242-2.769,2.768v59.924H63.1V32.979z M43.08,32.979c0-3.816,3.104-6.921,6.921-6.921 c3.816,0,6.921,3.105,6.921,6.921v60.794h-4.153V33.85c0-1.526-1.241-2.768-2.768-2.768s-2.769,1.242-2.769,2.768v59.924H43.08 V32.979z M23.059,32.979c0-3.816,3.105-6.921,6.921-6.921c3.816,0,6.921,3.105,6.921,6.921v60.794h-4.153V33.85 c0-1.526-1.242-2.768-2.769-2.768c-1.526,0-2.768,1.242-2.768,2.768v59.924h-4.153V32.979z"
                            />
                        </svg>
                    </div>
                </div>
                <div className={FeatureStyle.taskView}>
                    {this.renderTasks()}
                    <input className={FeatureStyle.taskInput} onKeyPress={this.handleKeyPress} value={this.state.taskToAdd} onChange={this.handleChange} placeholder="New Task"></input>
                </div>
                <div className={FeatureStyle.featureToolbar}>
                    <div className={ProgressBarStyle.background}>
                        <div className={ProgressBarStyle.foreground} style={{ width: this.calculatePercentage() }}>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const addTask = (featureID, task) => {
    return {
        type: "ADD_TASK",
        id: featureID,
        task: task
    }
}

const editFeature = (featureID, title) => {
    return {
        type: "EDIT_FEATURE",
        id: featureID,
        title: title
    }
}

const deleteFeature = (featureID) => {
    return {
        type: "REMOVE_FEATURE",
        id: featureID,
    }
}

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTask, editFeature, deleteFeature }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Feature);