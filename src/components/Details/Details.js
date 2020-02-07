import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import Meta from '../Base/meta'

import classes from './Details.module.scss'
import Event from '../../assets/event'

const details = (props) => {
    return <div>
        <div className="d-flex justify-content-end w-100">
            <Link className="button bg-black br-white" to={'/'}>Terug</Link>
        </div>
        
        <div className={classes.Header}>
            <Meta date={Event.startsAt} />
            <h1>{Event.performer}</h1>
            <h2>{Event.title}</h2>
        </div>
        
        <article className={classes.EventInfo}>
            <div>{Event.genre} Locatie{Event.location}</div>
            <div className="d-flex">
                <span><Moment date={Event.startsAt} format='dd DD MMM YYYY' locale={'nl'} /> </span>
                <span>Start: <Moment date={Event.startsAt} format='HH:mm' /></span>
                <span>Start: <Moment date={Event.endsAt} format='HH:mm' /></span>
            </div>
            <div>
                {Event.description}
            </div>
        </article>
    </div>
}

export default details
