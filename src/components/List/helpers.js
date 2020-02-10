import Moment from 'moment'

/**
 * @param json
 * @returns {[]}
 */
export function groupListByDate (json) {
    return json
    const list = _createGroupedList(json)
    return list
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
    
    // console.debug(reduced)
}

// let test = {
//     date: '02022020',
//     items: [
//         {},
//         {},
//     ],
// }

// let group = cars.reduce((r, a) => {
//     console.log("a", a);
//     console.log('r', r);
//     r[a.make] = [...r[a.make] || [], a];
//     return r;
// }, {});
// console.log("group", group);

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
 * @param dig
 * @returns {string}
 * @private
 */
function _addLeadingZero (dig) {
    return (dig < 10 ? '0' : '') + dig
}

/**
 * @param event
 * @param list
 * @returns {*}
 */
export function filterHandler (event, list, filteredList, t) {
    let searchValue = event.target.value
    let returnList = list.filter(ev => {
        return (
            (ev.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
            || (ev.performer.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
        )
    })
    
    t.setState({filteredList: returnList})
}
