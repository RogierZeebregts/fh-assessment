import React from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'
import 'moment/locale/nl'
import slugify from 'slugify'

import classes from './List.module.scss'

const ListItem = props => {
    const url = `/${props.data.id}/${slugify(props.data.title)}`
    
    return (
        <div className="p-2 d-block">
            <div className={classes.Event}>
                <div className="d-flex w-100">
                    <div className="p-2 pr-4 d-flex align-items-center">
                        <Moment format='dd DD MMM' locale='nl'>{props.data.startsAt}</Moment>
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
