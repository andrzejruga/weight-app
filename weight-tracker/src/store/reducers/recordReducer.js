const initState = {
    records: [
        {id: '1', weightOne: '54', date: '2019-02-04', weightTwo: '72'},
        {id: '2', weightOne: '54', date: '2019-02-05', weightTwo: '74'},
        {id: '3', weightOne: '54', date: '2019-02-06', weightTwo: '75'}
    ]
}

const recordReducer = (state = initState, action) => {
    return state;
}

export default recordReducer;