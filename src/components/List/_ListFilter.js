import React from 'react'
import { groupBy } from '../../lib/global.helpers'

const ListFilter = props => {
    const genresList = groupBy(props.list, 'genre')
    const genres = genresList.map((genre, index) => {
        return <option value={genre} key={index}>{genre}</option>
    })
    
    return <div className="d-flex align-items-center pb-4 pt-4">
        <span className="pr-3">Zoek</span>
        <input className="text-input" placeholder="op evenement of artiest" onChange={props.changed}/>
        
        <div className="select-container d-flex align-items-center pl-4 pr-4">
            <span className="pr-3">Soort</span>
            <select className="select-input" onChange={props.genreChanged}>
                <option value={``}>Alle</option>
                {genres}
            </select>
        </div>
        
        <div className="flex-grow-1 d-flex justify-content-end">
            {props.filteredList.length ? props.filteredList.length : `geen`} resultaten
        </div>
    </div>
}

export default ListFilter
