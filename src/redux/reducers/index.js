import {
    EVENTS_LOADED,
    EVENTTYPES_LOADED,
    EVENTTYPES_FILTER_SET, EVENTINPUT_FILTER_SET,
} from '../constants/action-types'

const initialState = {
    originalList: [],
    eventsList: [],
    genresList: [],
}

function rootReducer (state = initialState, action) {
    // console.log(action.type)
    if (action.type === EVENTS_LOADED) {
        return Object.assign({}, state, {
            eventsList: state.eventsList.concat(action.payload),
            originalList: state.eventsList = action.payload,
        })
    }
    
    if (action.type === EVENTTYPES_LOADED) {
        return Object.assign({}, state, {
            genresList: state.genresList = action.payload,
        })
    }
    
    if (action.type === EVENTTYPES_FILTER_SET) {
        const genre = action.payload
        const list = genre ? state.originalList.filter(ev => ev.genre === genre) : state.originalList
        return Object.assign({}, state, {
            eventsList: state.eventsList = list,
        })
    }
    
    if (action.type === EVENTINPUT_FILTER_SET) {
        const searchValue = action.payload
        const list = state.originalList.filter(ev => {
            return (
                (ev.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
                || (ev.performer.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
            )
        })
        
        return Object.assign({}, state, {
            eventsList: state.eventsList = list,
        })
    }
    
    return state
}

export default rootReducer
