import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getEvent } from '../../redux/actions'
import { withRouter } from 'react-router'

import Spotlight from './components/DetailsSpotlight'
import classes from './Details.module.scss'

const EventDetails = props => {
    let {id} = props.match.params
    
    useEffect(_ => {
        props.getEvent(id)
    }, [])
    
    function descriptionMarkup () {
        return {__html: props.event.description}
    }
    
    return (
        <div>
            <div className="d-flex justify-content-end w-100">
                <Link className="button bg-black br-white" to={'/'}>Terug</Link>
            </div>
    
            <Spotlight data={props.event}/>
            
            <article className={`${classes.EventInfo} pb-4`}>
                <div dangerouslySetInnerHTML={descriptionMarkup()}/>
            </article>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        event: state.event,
    }
}

export default withRouter(connect(
    mapStateToProps,
    {getEvent},
)(EventDetails))
