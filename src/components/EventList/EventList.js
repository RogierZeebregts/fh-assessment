import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEventList } from '../../redux/actions/index'
import ListItem from './components/ListItem'

const EventList = props => {
    useEffect(_ => {
        props.getEventList()
    }, [])
    
    return (
        props.list.map((el, index) => (
            <ListItem data={el} key={index}/>
        ))
    )
}

const mapStateToProps = state => {
    return {
        list: state.eventsList,
        // list: state.eventsList.slice(0, 10),
    }
}

export default connect(
    mapStateToProps,
    {getEventList},
)
(EventList)
