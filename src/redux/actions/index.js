import {
    EVENT_LOADED,
    EVENTS_LOADED,
    EVENTS_LOADED_PENDING,
    EVENTS_LOADED_FAILED,
    EVENTTYPES_LOADED,
    EVENTTYPES_FILTER_SET,
    EVENTINPUT_FILTER_SET,
} from '../constants/action-types'

export const getEventList = _ => {
    return function (dispatch) {
        dispatch({type: EVENTS_LOADED_PENDING, payload: 'loading'})
        return fetch(`${process.env.REACT_APP_THEATER_BASEURL}/public/events`)
            .then(response => response.json())
            .then(json => {
                const payload = json
                dispatch({type: EVENTS_LOADED, payload})
                dispatch({type: EVENTTYPES_LOADED, payload: _groupBy(payload, 'genre')})
            })
            .catch(error => {
                dispatch({type: EVENTS_LOADED_FAILED, payload: error})
            })
    }
}

export const getEvent = payload => (
    {type: EVENT_LOADED, payload}
)

export const setEventtypeFilter = payload => (
    {type: EVENTTYPES_FILTER_SET, payload}
)

export const setEventinputFilter = payload => (
    {type: EVENTINPUT_FILTER_SET, payload}
)

function _groupBy (list, key) {
    const grouped = list.map(item => {
        return item[key]
    })
    
    return [...new Set(grouped)].sort()
}
