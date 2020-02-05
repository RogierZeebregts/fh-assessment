import Moment from 'moment'

/**
 * @param json
 * @returns {[]}
 */
export function groupListByDate (json) {
    const list = _createGroupedList(json)
    return _convertObjectToArray(list)
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
    }, {})
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
 * @param dig
 * @returns {string}
 * @private
 */
function _addLeadingZero (dig) {
    return (dig < 10 ? '0' : '') + dig
}
