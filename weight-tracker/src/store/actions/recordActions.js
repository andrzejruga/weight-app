export const addRecord = (record) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database and then dispatch
        dispatch({ type: 'ADD_RECORD', record }); // record: record
    }
}