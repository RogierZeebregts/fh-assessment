import React from 'react'
import ListItem from './_ListItem'

const list = (props) => props.list.map((item, index) => {
    return <ListItem
        key={index}
        data={item}
    />
})

export default list
