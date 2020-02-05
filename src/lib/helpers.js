import Moment from 'moment'

/**
 * @param json
 * @returns {[]}
 */
export function groupListByDate (json) {
    const list = _createGroupedList(json)
    console.log(list)
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
    }, [])
}

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
