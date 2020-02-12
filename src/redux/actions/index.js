import {
    EVENTS_LOADED,
    GENRES_LOADED,
} from '../constants/action-types'

import store from '../store'

export function getData () {
    return function (dispatch) {
        return fetch(`${process.env.REACT_APP_THEATER_BASEURL}/public/events`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: EVENTS_LOADED, payload: json})
            })
    }
}

export function getCurrentGenres () {
    return function (dispatch) {
        dispatch({
            type: GENRES_LOADED, payload: {
                0: 0,
                1: 1,
            },
        })
    }
}
