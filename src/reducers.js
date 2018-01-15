export const features = (state = [{
    id: 0,
    title: 'Feature',
    tasks: ["Task One"]

}], action) => {
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
        default:
            return state;
    }
};

// delete element of array and return new array (non-mutating)
const removeAtIndex = (features, index) => features.filter((_, i) => i !== index);

const addTask = (features, index, task) => {
    let newFeatures = [...features];
    newFeatures[index].tasks = [...newFeatures[index].tasks, task]
    return newFeatures;
};
