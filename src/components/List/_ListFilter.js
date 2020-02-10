import React from 'react'

const ListFilter = props => {
    return <div className="d-flex align-items-center pb-4 pt-4">
        <span className="pr-3">Zoek</span>
        <input className="text-input" placeholder="op evenement of artiest" onInput={props.changed}/>
    </div>
}

export default ListFilter
