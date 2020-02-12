import {
    EVENTS_LOADED,
    EVENTS_LOADED_PENDING,
    EVENTS_LOADED_FAILED,
    GENRES_LOADED,
} from '../constants/action-types'

export function getData () {
    return function (dispatch) {
        dispatch({type: EVENTS_LOADED_PENDING, payload: 'loading'})
        return fetch(`${process.env.REACT_APP_THEATER_BASEURL}/public/events`)
            .then(response => response.json())
            .then(json => {
                const payload = json
                dispatch({type: EVENTS_LOADED, payload})
                dispatch({type: GENRES_LOADED, payload: _groupBy(payload, 'genre')})
            })
            .catch(error => {
                dispatch({type: EVENTS_LOADED_FAILED, payload: error})
            })
    }
}

/**
 * @param list
 * @param key
 * @returns {this}
 * @private
 */
function _groupBy (list, key) {
    const grouped = list.map(item => {
        return item[key]
    })
    
    return [...new Set(grouped)].sort()
}
