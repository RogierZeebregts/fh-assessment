import React, { Component } from 'react'
import { connect } from 'react-redux'

export class EventListFilter extends Component {
    render () {
        const genres = this.props.genres.map((genre, index) => {
            return <option value={genre} key={index}>{genre}</option>
        })
        
        return (
            <div className="d-flex align-items-center pb-4 pt-4">
                <span className="pr-3">Zoek</span>
                <input className="text-input" placeholder="op evenement of artiest"/>
                
                <div className="select-container d-flex align-items-center pl-4 pr-4">
                    <span className="pr-3">Soort</span>
                    <select className="select-input">
                        <option value={``}>Alle</option>
                        {genres}
                    </select>
                </div>
                
                <div className="flex-grow-1 d-flex justify-content-end">
                    {this.props.list.length} resultaten
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        list: state.eventsList,
        genres: state.genresList,
    }
}

export default connect(
    mapStateToProps,
)(EventListFilter)
