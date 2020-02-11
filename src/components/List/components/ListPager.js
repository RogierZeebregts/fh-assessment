import React from 'react'
import classes from '../List.module.scss'

const ListPager = (props) => {
    const PagerItems = props.list.map((item, index) => {
        return <li key={index}>
            <a onClick={props.chunkIndexChanged} className="d-flex align-content-center justify-content-center" href="#" data-key={index}>{index + 1}</a>
        </li>
    })
    
    return <ul className={`${classes.Pager} d-flex justify-content-center pt-5 pb-5`}>
        {PagerItems}
    </ul>
}

export default ListPager
