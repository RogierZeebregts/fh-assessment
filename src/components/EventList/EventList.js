import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEventList } from '../../redux/actions/index'
import ListItem from './components/ListItem'

const EventList = _ => {
    const list = useSelector(state => state.eventsList)
    const dispatch = useDispatch()
    
    useEffect(_ => {
        dispatch(getEventList())
    }, [])
    
    return (
        list.map((el, index) => (
            <ListItem data={el} key={index}/>
        ))
    )
}

export default EventList
