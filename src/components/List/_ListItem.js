import React from 'react'
import {Link} from 'react-router-dom'
import slugify from 'slugify'
import DateFormat from '../Base/DateFormat'

import classes from './List.module.scss'

const ListItem = props => {
    const url = `/${props.data.id}/${slugify(props.data.title)}`
    
    return (
        <div className="p-2 d-block">
            <div className={classes.Event}>
                <div className="d-flex w-100">
                    <div className={`${classes.date} p-2 pr-4 d-flex align-items-center`}>
                        <DateFormat date={props.data.startsAt} />
                    </div>
                    
                    <div className="p-2">
                        <h2><Link to={url}>{props.data.performer}</Link></h2>
                        <h3>{props.data.title}</h3>
                    </div>
                    
                    <div className="flex-grow-1 d-flex justify-content-end align-items-center">
                        <span className={classes.genre}>{props.data.genre}</span>
                        <Link className={`${classes.button} button bg-black br-white`} to={url}>Tickets</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem
