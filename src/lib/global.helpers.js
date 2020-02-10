/**
 * @param list
 * @param key
 */
export function groupBy (list, key) {
    const grouped = list.map(item => {
        return item[key]
    })
    
    return [...new Set(grouped)].sort();
}
