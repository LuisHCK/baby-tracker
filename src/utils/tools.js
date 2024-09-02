import { flOzRegex } from './regex'

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

export const toFixed = (num, decimals = 2) => (Math.round(num * 100) / 100).toFixed(decimals)

export const formatDuration = (duration = {}) => {
    let result = ''

    if (duration.days && duration.days > 0) {
        result += `${duration.days}h `
    }
    if (duration.hours && duration.hours > 0) {
        result += `${duration.hours}h `
    }
    if (duration.minutes && duration.minutes > 0 && !duration.days) {
        result += `${duration.minutes}m`
    }

    return result
}

/**
 * Simplify unit diplay label
 */
export const shortUnit = (unit) => {
    return flOzRegex.test(unit) ? 'oz' : unit
}
