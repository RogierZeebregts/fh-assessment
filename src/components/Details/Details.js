import React from 'react'
import { Link } from 'react-router-dom'
import Spotlight from './components/DetailsSpotlight'
import ReactHtmlParser from 'react-html-parser'

import {fetchDetails} from '../../lib/global.helpers'
import classes from './Details.module.scss'
import { withRouter } from 'react-router'

const details = (props) => {
    let {id, slug} = props.match.params
    
    // const data =
    
    return <div>
        <div className="d-flex justify-content-end w-100">
            <Link className="button bg-black br-white" to={'/'}>Terug</Link>
        </div>
        
        <Spotlight data={props.data}/>
        
        <article className={`${classes.EventInfo} pb-4`}>
            <div>{ReactHtmlParser(props.data.description)}</div>
        </article>
    </div>
}

export default withRouter(details)
