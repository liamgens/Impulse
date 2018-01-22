import React from 'React'
import TaskStyle from './task.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Task extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showDelete: false
        }
    }

    handleChange(event) {
        this.props.editTask(this.props.fid, this.props.id, event.target.value);
    }
    render() {

        let taskDescription = this.props.features[this.props.fid].tasks[this.props.id].description;
        let taskCompleted = this.props.features[this.props.fid].tasks[this.props.id].completed;

        return (
            <div className={TaskStyle.taskContainer} onMouseEnter={() => {
                this.setState({ showDelete: true })
            }}
                onMouseLeave={() => {
                    this.setState({ showDelete: false })
                }}>
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
                    color: taskCompleted ? "gray" : "black"
                }} />

                {this.state.showDelete ?
                    <div className={TaskStyle.delete} onClick={() => this.props.removeTask(this.props.fid, this.props.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" >
                            <path d="M81.218,9.612H63.63V2.633C63.63,1.181,62.448,0,60.996,0H39.004c-1.452,0-2.633,1.181-2.633,2.633v6.979H18.783 c-4.091,0-7.202,2.651-8.413,6.249h79.261C88.42,12.264,85.309,9.612,81.218,9.612z M59.794,9.612H40.207V5.312 c0-1.043,0.849-1.892,1.893-1.892h15.802c1.044,0,1.893,0.849,1.893,1.892V9.612z M16.382,100h67.237V18.818H16.382V100z M63.1,32.979c0-3.816,3.104-6.921,6.921-6.921c3.815,0,6.921,3.105,6.921,6.921v60.794h-4.152V33.85 c0-1.526-1.242-2.768-2.769-2.768s-2.769,1.242-2.769,2.768v59.924H63.1V32.979z M43.08,32.979c0-3.816,3.104-6.921,6.921-6.921 c3.816,0,6.921,3.105,6.921,6.921v60.794h-4.153V33.85c0-1.526-1.241-2.768-2.768-2.768s-2.769,1.242-2.769,2.768v59.924H43.08 V32.979z M23.059,32.979c0-3.816,3.105-6.921,6.921-6.921c3.816,0,6.921,3.105,6.921,6.921v60.794h-4.153V33.85 c0-1.526-1.242-2.768-2.769-2.768c-1.526,0-2.768,1.242-2.768,2.768v59.924h-4.153V32.979z"
                            />
                        </svg>
                    </div>
                    : null
                }

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

const removeTask = (feature_id, task_id) => {
    return {
        type: "REMOVE_TASK",
        id: feature_id,
        task_id: task_id
    }
}

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleTask, editTask, removeTask }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Task);