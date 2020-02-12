import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EventListFilter } from '../EventList/EventListFilter'
import { Link } from 'react-router-dom'

export class EventDetails extends Component {
    render () {
        return (
            <div>
                <div className="d-flex justify-content-end w-100">
                    <Link className="button bg-black br-white" to={'/'}>Terug</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

export default connect(
    mapStateToProps,
)(EventDetails)
