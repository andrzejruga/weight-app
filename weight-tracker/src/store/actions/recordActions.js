export const addRecord = (record) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database and then dispatch
        const firestore = getFirestore();
        firestore.collection('records').add({
            ...record, // properties from state from NewRecord
            authorFirstName: 'Zo',
            authorLastName: 'Nowak',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_RECORD', record }); // record: record
        }).catch((err) => {
            dispatch({ type: 'ADD_RECORD_ERROR', err });
        });
    }
}