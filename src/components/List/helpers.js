import Moment from 'moment'

/**
 * @param json
 * @returns {[]}
 */
export function groupListByDate (json) {
    return json
    // const list = _createGroupedList(json)
    // return list
    // return _convertObjectToArray(list)
}

/**
 * Create Grouped List
 * @param json
 * @returns {*}
 * @private
 */
function _createGroupedList (json) {
    return json.reduce((obj, item) => {
        const key = Moment(item.startsAt).format('YYYY MM DD')
        if (!obj.hasOwnProperty(key)) {
            obj[key] = []
        }
        obj[key].push(item)
        
        return obj
    }, [])
}

/**
 * Generator
 * Convert Object To Array
 * @param obj
 * @returns {unknown[]}
 * @private
 */
function _convertObjectToArray (obj) {
    let arr = Object.keys(obj).map((k) => obj[k])
    return arr
    
    // function * values (obj) {
    //     for (let prop in obj) {
    //         // console.debug(prop);
    //         yield obj[prop]
    //     }
    // }
    //
    // console.debug(values(obj))
    // let arr = Array.from(values(obj))
    
}

/**
 * @param event
 * @param list
 * @param filteredList
 * @param t
 */
export function filterHandler (event, list, t) {
    event.preventDefault()
    const searchValue = event.target.value
    const returnList = list.filter(ev => {
        return (
            (ev.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
            || (ev.performer.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
        )
    })
    
    t.setState({filteredList: returnList})
}

/**
 * @param event
 * @param list
 * @param filteredList
 * @param t
 */
export function setGenreHandler (event, list, t) {
    const genre = event.target.value
    const returnList = genre ? list.filter(ev => ev.genre === genre) : list
    
    t.setState({filteredList: returnList})
}

/**
 * @param event
 * @param data
 * @param t
 */
export function changeDetailsHandler (event, data, t) {
    t.setState({activeDetails: data})
}

/**
 * @param event
 */
export function changeChunkIndexHandler (event, t) {
    event.preventDefault()
    
    const key = parseInt(event.target.dataset.key) + 1
    t.setState({chunkIndex: key})
}
