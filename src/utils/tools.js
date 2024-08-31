/**
 * Check if the given object is empty
 * @param {*} obj
 * @returns {booelan}
 */
export const isEmpty = (obj) => {
    switch (typeof obj) {
        case 'object':
            return Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length === 0
        case 'string':
            return obj.length === 0
        case 'number':
            return obj === 0
        default:
            return false
    }
}
