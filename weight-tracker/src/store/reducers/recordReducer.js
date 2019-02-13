const initState = {}

const recordReducer = (state = initState, action) => {
    switch (action.type) { // I could use as well if statement instead of switch
        case 'ADD_RECORD':
            console.log('added record', action.record);
            return state;
        case 'ADD_RECORD_ERROR':
            console.log('add record error', action.err);
            return state;
        default:
            return state;
    }
}

export default recordReducer;