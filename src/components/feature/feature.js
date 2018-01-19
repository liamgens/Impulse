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
                    {this.props.features[this.props.id].title}
                </div>
                <div className={FeatureStyle.taskView}>
                    {this.renderTasks()}
                    <input onKeyPress={this.handleKeyPress} value={this.state.taskToAdd} onChange={this.handleChange}></input>
                </div>
                <div className={FeatureStyle.featureToolbar}>
                    <div className={ProgressBarStyle.background}>
                        <div className={ProgressBarStyle.foreground} style={{ width: this.calculatePercentage() }}>
                        </div>
                    </div>
                </div>
            </div>
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

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTask, }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Feature);