import React from 'react'
import { connect } from 'react-redux'

import ListItem from './components/ListItem'

const mapStateToProps = state => {
    return {list: state.list}
}

const ConnectedList = ({list}) => (
    <ul>
        {list.map(el => (
            <ListItem data={el}/>
        ))}
    </ul>
)

const ListRedux = connect(mapStateToProps)(ConnectedList)

export default ListRedux
