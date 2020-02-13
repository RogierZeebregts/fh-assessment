import React from 'react'
import { connect } from 'react-redux'
import { setEventtypeFilter } from '../../redux/actions'

const mapStateToProps = state => {
    return {
        list: state.eventsList,
        genres: state.genresList,
    }
}

const EventListFilter = props => {
    const genres = props.genres.map((genre, index) => {
        return <option value={genre} key={index}>{genre}</option>
    })
    
    const changeHandler = event => {
        props.setEventtypeFilter(event.target.value)
    }
    
    return (
        <div className="d-flex align-items-center pb-4 pt-4">
            <span className="pr-3">Zoek</span>
            <input className="text-input" placeholder="op evenement of artiest"/>
            
            <div className="select-container d-flex align-items-center pl-4 pr-4">
                <span className="pr-3">Soort</span>
                <select className="select-input" onChange={changeHandler}>
                    <option value={``}>Alle</option>
                    {genres}
                </select>
            </div>
            
            <div className="flex-grow-1 d-flex justify-content-end">
                {props.list.length} resultaten
            </div>
        </div>
    )
}

export default connect(
    mapStateToProps,
    {setEventtypeFilter}
)(EventListFilter)
