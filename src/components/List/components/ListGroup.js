import React from 'react'
import ListItem from './ListItem'

const group = props => Array.from(props.data).map((item, index) => {
    return <ListItem
        key={index}
        data={item}
    />
})

export default group
