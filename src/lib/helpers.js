import Moment from 'moment'

/**
 * @param json
 * @returns {[]}
 */
export function groupListByDate (json) {
    return json.reduce((obj, item) => {
        const key = Moment(item.startsAt).format('YYYY MM DD')
        // const date = new Date(item.startsAt)
        // const key = `${date.getFullYear()}${_addLeadingZero(date.getMonth())}${_addLeadingZero(date.getDay())}`
        
        if (!obj.hasOwnProperty(key)) {
            obj[key] = []
        }
        obj[key].push(item)
        
        return obj
    }, {})
}

/**
 * @param dig
 * @returns {string}
 * @private
 */
function _addLeadingZero(dig) {
    return (dig < 10 ? '0' : '') + dig
}
