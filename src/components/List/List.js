import React from 'react'
import ListItem from './_ListItem'
import ListFilter from './_ListFilter'

import { filterHandler } from './helpers'

const ListContainer = (props) => {
    let list = props.filteredList.map((item, index) => {
        return <ListItem
            key={index}
            data={item}
        />
    })
    
    return (
        <div>
            <ListFilter changed={(event) => filterHandler(event, props.list, props.filteredList, props.this)}/>
            {list}
        </div>
    )
}

export default ListContainer
