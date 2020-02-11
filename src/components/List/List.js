import React from 'react'
import ListItem from './components/ListItem'
import ListFilter from './components/ListFilter'

import {
    filterHandler,
    setGenreHandler,
    changeDetailsHandler,
} from './helpers'

const ListContainer = (props) => {
    let list = props.filteredList.map((item, index) => {
        return <ListItem
            key={index}
            data={item}
            detailsChanged={(event) => changeDetailsHandler(event, item, props.this)}
        />
    })
    
    return (
        <div>
            <h1 className="large d-flex justify-content-center mb-5 pl-5 pt-5">Programma</h1>
            <ListFilter
                list={props.list}
                filteredList={props.filteredList}
                changed={(event) => filterHandler(event, props.list, props.this)}
                genreChanged={(event) => setGenreHandler(event, props.list, props.this)}
            />
            
            {list}
    
            {/*<ListPager*/}
            {/*    list={props.filteredList}*/}
            {/*    chunkIndexChanged={(event) => changeChunkIndexHandler(event, props.this)}*/}
            {/*/>*/}
        </div>
    )
}

export default ListContainer
