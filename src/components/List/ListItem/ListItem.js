import React from 'react'
import classes from '../List.module.scss'

const listItem = (props) => {
    return (
        <div className="p-2">
            <h3>{props.data.title}</h3>
            
        </div>
    )
}

export default listItem
