import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // Change data
            return updateObject(state, {results: state.results.concat({ id: new Date(), value: action.result})})
        case actionTypes.DELETE_RESULT:
            // Deleting elements immutably using filter()
            const updatedArr = state.results.filter(result => result.id !== action.resultElId)
            return updateObject(state, {results: updatedArr})
        default:
    }
    return state
}


export default reducer