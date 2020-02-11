import React from 'react'
import { Link } from 'react-router-dom'
import Spotlight from './components/DetailsSpotlight'

import { fetchDetails } from '../../lib/global.helpers'
import classes from './Details.module.scss'
import { withRouter } from 'react-router'

const details = (props) => {
    let {id} = props.match.params
    
    let details = null
    const detailsData = fetchDetails(props.list, id)
    
    if (detailsData && detailsData.hasOwnProperty('title')) {
        function descriptionMarkup () {
            return {__html: detailsData.description}
        }
        
        details = (
            <div>
                <div className="d-flex justify-content-end w-100">
                    <Link className="button bg-black br-white" to={'/'}>Terug</Link>
                </div>
                
                <Spotlight data={detailsData}/>
                
                <article className={`${classes.EventInfo} pb-4`}>
                    <div dangerouslySetInnerHTML={descriptionMarkup()}/>
                </article>
            </div>
        )
    }
    
    return details
}

export default withRouter(details)
