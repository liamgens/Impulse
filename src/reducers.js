export const features = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    tasks: []
                }
            ];
        case 'REMOVE_FEATURE':
            return removeAtIndex(state, action.id);
        case 'ADD_TASK':
            return addTask(state, action.id, action.task)
        case 'TOGGLE_TASK':
            return toggleTask(state, action.id, action.task_id)
        default:
            return state;
    }
};

// delete element of array and return new array (non-mutating)
const removeAtIndex = (features, index) => features.filter((_, i) => i !== index);

const addTask = (features, index, task) => {
    let newTask = { description: task, completed: false }
    let newFeatures = [...features];
    newFeatures[index].tasks = [...newFeatures[index].tasks, newTask]
    return newFeatures;
};

const toggleTask = (features, index, task_id) => {
    let newFeatures = [...features];
    let newTasks = [...newFeatures[index].tasks];
    newTasks[task_id].completed = !newTasks[task_id].completed;
    newFeatures[index].tasks = newTasks;
    return newFeatures;
}
