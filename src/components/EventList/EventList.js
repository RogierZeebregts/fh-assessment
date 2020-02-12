import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../../redux/actions/index'
import ListItem from './components/ListItem'

export class EventList extends Component {
    componentDidMount () {
        this.props.getData()
    }
    
    render () {
        return (
            this.props.list.map((el, index) => (
                <ListItem data={el} key={index}/>
            ))
        )
    }
}

function mapStateToProps (state) {
    return {
        list: state.eventsList.slice(0, 10),
    }
}

export default connect(
    mapStateToProps,
    {getData},
)(EventList)
