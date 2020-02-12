import {
    EVENTS_LOADED,
    GENRES_LOADED,
} from '../constants/action-types'

const initialState = {
    eventsList: [],
    genresList: [],
}

function rootReducer (state = initialState, action) {
    if (action.type === EVENTS_LOADED) {
        return Object.assign({}, state, {
            eventsList: state.eventsList.concat(action.payload),
        })
    }
    
    if (action.type === GENRES_LOADED) {
        return Object.assign({}, state, {
            genresList: state.genresList.concat(action.payload),
        })
    }
    
    return state
}

export default rootReducer
