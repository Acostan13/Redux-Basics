const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state)
            newState.counter = state.counter + 1
            return newState
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case 'DELETE_RESULT':
            // const id = 2
            // const newArr = [...state.results]
            // newArr.splice(id, 1)

            // Deleting elements immutably using filter()
            const updatedArr = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArr
            }
        default:
    }
    return state
}


export default reducer