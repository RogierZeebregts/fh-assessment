import React, { Component } from 'react'
import { getCurrentGenres, getData } from '../../redux/actions'
import { connect } from 'react-redux'

export class EventListFilter extends Component {
    componentDidMount () {
        this.props.getCurrentGenres()
    }
    
    render () {
        return (
            <div className="d-flex align-items-center pb-4 pt-4">
                <span className="pr-3">Zoek</span>
                <input className="text-input" placeholder="op evenement of artiest"/>
                
                <div className="select-container d-flex align-items-center pl-4 pr-4">
                    <span className="pr-3">Soort</span>
                    <select className="select-input">
                        <option value={``}>Alle</option>
                    </select>
                </div>
                
                <div className="flex-grow-1 d-flex justify-content-end">
                    resultaten
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        genres: state.genresList,
    }
}

export default connect(
    mapStateToProps,
    {getCurrentGenres},
)(EventListFilter)
