import { ADD_LIST } from '../constants/action-types'

const initialState = {
    list: [],
}

/**
 * @param state
 * @param action
 * @returns {{list: []}|*[]}
 */
function rootReducer (state = initialState, action) {
    if (action.type === ADD_LIST) {
        return [...{list: state.list.concat(action.payload)}]
    }
    return state
}

export default rootReducer
