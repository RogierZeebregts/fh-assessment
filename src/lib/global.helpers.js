/**
 * @param list
 * @param key
 */
export function groupBy (list, key) {
    const grouped = list.map(item => {
        return item[key]
    })
    
    return [...new Set(grouped)].sort()
}

/**
 * @param array
 * @param size
 * @returns {[]}
 */
export function chunkArray (array, size) {
    const chunked_arr = []
    let index = 0
    while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index))
        index += size
    }
    return chunked_arr
}

export function fetchDetails(list, id) {

}
