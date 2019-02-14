export const addRecord = (record) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database and then dispatch
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('records').add({
            ...record, // properties from state from NewRecord
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_RECORD', record }); // record: record
        }).catch((err) => {
            dispatch({ type: 'ADD_RECORD_ERROR', err });
        });
    }
}

// export const deleteRecord = (record) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         const firestore = getFirestore();
//     }
// }