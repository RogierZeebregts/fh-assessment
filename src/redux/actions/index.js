import { ADD_LIST } from '../constants/action-types'

/**
 * @param payload
 * @returns {{payload: *, type: string}}
 */
export function addList (payload) {
    return {type: ADD_LIST, payload}
}

/**
 * @returns {Promise<{payload: any, type: string}>}
 */
export function getData () {
    return fetch(`${process.env.REACT_APP_THEATER_BASEURL}/public/events`)
        .then(response => response.json())
        .then(json => {
            return {type: 'DATA_LOADED', payload: json}
        })
}
