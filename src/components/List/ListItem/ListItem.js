import React from 'react'
import classes from '../List.module.scss'

const listItem = (props) => {
    return (
        <div className="p-2">
            <div className={classes.Event}>
                <div>
                    <h2>{props.data.performer}</h2>
                    <h3>{props.data.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default listItem
