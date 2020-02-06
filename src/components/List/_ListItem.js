import React from 'react'
import Moment from 'react-moment'
import 'moment/locale/nl'
import classes from './List.module.scss'

const _ListItem = props => {
    return (
        <div className="p-2 d-block">
            <div className={classes.Event}>
                <div className="d-flex w-100">
                    <div className="p-2 pr-4 d-flex align-items-center">
                        <Moment format='dd DD MMM' locale='nl'>{props.data.startsAt}</Moment>
                    </div>
                    <div className="p-2">
                        <h2><a className="" href="#">{props.data.performer}</a></h2>
                        <h3>{props.data.title}</h3>
                    </div>
                    <div className="flex-grow-1 d-flex justify-content-end align-items-center">
                        <a className="button bg-black br-white" href="#">Tickets</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default _ListItem
