import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import ReactHtmlParser from 'react-html-parser'
import DateFormat from '../Base/DateFormat'
import Photos from './_Photos'

import classes from './Details.module.scss'
import Event from '../../assets/event'

const details = (props) => {
    return <div>
        <div className="d-flex justify-content-end w-100">
            <Link className="button bg-black br-white" to={'/'}>Terug</Link>
        </div>
        
        <div className={`${classes.spotlight} d-flex`}>
            <div className={classes.spotlight__imageholder}>
                <img className={`${classes.image} rounded`} src={Event.images[0]} alt={Event.performer}/>
            </div>
            
            <div className={`${classes.spotlight__content} d-flex align-items-center`}>
                <div>
                    <DateFormat date={Event.startsAt}/>
                    <h1>{Event.performer}</h1>
                    <h2>{Event.title}</h2>
                    
                    <div className={`${classes.EventInfo} pt-5`}>
                        <div>
                            <span className="pb-3 pr-4 pt-3">{Event.genre}</span>
                            <span className="pb-3 pr-4 pt-3">Locatie <span className="bold">{Event.location}</span></span>
                        </div>
                        <div className="d-flex">
                            <span className="bold pb-3 pr-4 pt-3"><Moment date={Event.startsAt} format='dd DD MMM YYYY' locale={'nl'}/> </span>
                            <span className="pb-3 pr-4 pt-3">Start: <span className="bold"><Moment date={Event.startsAt} format='HH:mm'/></span></span>
                            <span className="pb-3 pr-4 pt-3">Einde: <span className="bold"><Moment date={Event.endsAt} format='HH:mm'/></span></span>
                        </div>
                        
                        <Photos photos={Event.images} />
                    </div>
                </div>
            </div>
        </div>
        
        <article className={classes.EventInfo}>
            <div>{ReactHtmlParser(Event.description)}</div>
        </article>
    </div>
}

export default details
