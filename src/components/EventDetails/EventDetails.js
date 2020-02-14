import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getEvent } from '../../redux/actions'
import { withRouter } from 'react-router'

import Spotlight from './components/DetailsSpotlight'
import classes from './Details.module.scss'

const EventDetails = props => {
    let {id} = props.match.params
    const event = useSelector(state => state.event)
    const dispatch = useDispatch()
    
    useEffect(_ => {
        dispatch(getEvent(id))
    }, [])
    
    function descriptionMarkup () {
        return {__html: event.description}
    }
    
    return (
        <div>
            <div className="d-flex justify-content-end w-100">
                <Link className="button bg-black br-white" to={'/'}>Terug</Link>
            </div>
            
            <Spotlight data={event}/>
            
            <article className={`${classes.EventInfo} pb-4`}>
                <div dangerouslySetInnerHTML={descriptionMarkup()}/>
            </article>
        </div>
    )
}

export default withRouter(EventDetails)
