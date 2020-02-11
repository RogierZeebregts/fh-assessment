import React from 'react'
import DateFormat from '../../Base/DateFormat'
import Moment from 'react-moment'
import Photos from './DetailsPhotos'

import classes from '../Details.module.scss'

const Spotlight = (props) => {
    let spotlightImage = null
    let imageModal = null
    if (props.data.hasOwnProperty('images') && props.data.images.length) {
        spotlightImage = (
            <div className={classes.spotlight__imageholder}>
                <img className={`${classes.image} rounded`} src={props.data.images[0]} alt={props.data.performer}/>
            </div>
        )
        imageModal = <Photos images={props.data.images}/>
    }
    
    return (
        <div className={`${classes.spotlight} d-flex`}>
            {spotlightImage}
        
            <div className={`${classes.spotlight__content} d-flex align-items-center`}>
                <div>
                    <DateFormat date={props.data.startsAt}/>
                    <h1>{props.data.performer}</h1>
                    <h2>{props.data.title}</h2>
                
                    <div className={`${classes.EventInfo} pt-5`}>
                        <div>
                            <span className="pb-3 pr-4 pt-3">{props.data.genre}</span>
                            <span className="pb-3 pr-4 pt-3">Locatie: <span className="bold">{props.data.location}</span></span>
                        </div>
                        <div className="d-flex">
                            <span className="bold pb-3 pr-4 pt-3"><Moment date={props.data.startsAt} format='dd DD MMM YYYY' locale={'nl'}/> </span>
                            <span className="pb-3 pr-4 pt-3">Start: <span className="bold"><Moment date={props.data.startsAt} format='HH:mm'/></span></span>
                            <span className="pb-3 pr-4 pt-3">Einde: <span className="bold"><Moment date={props.data.endsAt} format='HH:mm'/></span></span>
                        </div>
                    
                        {imageModal}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spotlight
