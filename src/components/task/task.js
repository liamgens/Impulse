import React from 'React'
import TaskStyle from './task.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Task extends React.Component {

    handleChange(event) {
        this.props.editTask(this.props.fid, this.props.id, event.target.value);
    }
    render() {

        let taskDescription = this.props.features[this.props.fid].tasks[this.props.id].description;
        let taskCompleted = this.props.features[this.props.fid].tasks[this.props.id].completed;

        return (
            <div className={TaskStyle.taskContainer}>
                <div className={TaskStyle.checkbox} onClick={() => this.props.toggleTask(this.props.fid, this.props.id)}>
                    {!taskCompleted ? null :
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path d="M80.467,28.54c-1.562-1.562-4.096-1.562-5.658,0L40.868,62.48L27.194,48.806c-1.562-1.562-4.095-1.562-5.657,0 c-1.562,1.562-1.562,4.095,0,5.657L38.04,70.966c0.781,0.781,1.805,1.172,2.829,1.172s2.047-0.391,2.829-1.172l36.77-36.769 C82.028,32.634,82.028,30.102,80.467,28.54z"
                                />
                            </svg>
                        </div>
                    }
                </div>
                <input className={TaskStyle.description} value={this.props.features[this.props.fid].tasks[this.props.id].description} onChange={this.handleChange.bind(this)} style={{
                    textDecoration: taskCompleted ? "line-through" : "none",
                }} />
            </div>
        )
    }
}

const toggleTask = (feature_id, task_id) => {
    return {
        type: "TOGGLE_TASK",
        id: feature_id,
        task_id: task_id
    }
}

const editTask = (feature_id, task_id, description) => {
    return {
        type: "EDIT_TASK",
        id: feature_id,
        task_id: task_id,
        description: description
    }
}

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleTask, editTask }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Task);