import React from 'react'
import ListItem from './_ListItem'
import ListFilter from './_ListFilter'

import { filterHandler, setGenre } from './helpers'

const ListContainer = (props) => {
    let list = props.filteredList.map((item, index) => {
        return <ListItem
            key={index}
            data={item}
        />
    })
    
    return (
        <div>
            <ListFilter
                list={props.list}
                filteredList={props.filteredList}
                changed={(event) => filterHandler(event, props.list, props.this)}
                genreChanged={(event) => setGenre(event, props.list, props.this)}
            />
            {list}
        </div>
    )
}

export default ListContainer
