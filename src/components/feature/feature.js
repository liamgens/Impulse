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
                    {/* {this.props.features[this.props.id].title} */}
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

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTask, editFeature }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Feature);