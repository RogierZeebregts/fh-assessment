import {
    EVENT_LOADED,
    EVENTS_LOADED,
    EVENTTYPES_LOADED,
    EVENTTYPES_FILTER_SET, EVENTINPUT_FILTER_SET,
} from '../constants/action-types'

const initialState = {
    allList: [],
    eventsList: [],
    genresList: [],
    event: {},
}

function rootReducer (state = initialState, action) {
    if (action.type === EVENTS_LOADED) {
        return {
            ...state,
            eventsList: state.eventsList = action.payload,
            allList: state.eventsList = action.payload,
        }
    }
    
    if (action.type === EVENT_LOADED) {
        return {
            ...state,
            event: state.allList.find(el => el.id === parseInt(action.payload)),
        }
    }
    
    if (action.type === EVENTTYPES_LOADED) {
        return {
            ...state,
            genresList: action.payload,
        }
    }
    
    if (action.type === EVENTTYPES_FILTER_SET) {
        const genre = action.payload
        const list = genre ? state.allList.filter(ev => ev.genre === genre) : state.allList
        return {
            ...state,
            eventsList: list,
        }
    }
    
    if (action.type === EVENTINPUT_FILTER_SET) {
        const searchValue = action.payload
        const list = state.allList.filter(ev => {
            return (
                (ev.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
                || (ev.performer.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
            )
        })
        
        return {
            ...state,
            eventsList: list,
        }
    }
    
    return state
}

export default rootReducer
