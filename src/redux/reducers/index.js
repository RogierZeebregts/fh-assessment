import {
    EVENTS_LOADED,
    EVENTYPES_LOADED,
    EVENTYPES_FILTER_SET,
} from '../constants/action-types'

const initialState = {
    eventsList: [],
    genresList: [],
}

function rootReducer (state = initialState, action) {
    console.debug(action.type)
    if (action.type === EVENTS_LOADED) {
        return Object.assign({}, state, {
            eventsList: state.eventsList.concat(action.payload),
        })
    }
    
    if (action.type === EVENTYPES_LOADED) {
        return Object.assign({}, state, {
            genresList: state.genresList = action.payload,
        })
    }
    
    if (action.type === EVENTYPES_FILTER_SET) {
        // alert(action.payload)
    }
    
    return state
}

export default rootReducer
