import { format } from 'date-fns'
import { flOzRegex } from './regex'

/**
 * Check if the given object is empty
 * @param {*} obj
 * @returns {boolean}
 */
export const isEmpty = (obj) => {
    if (!obj) return true

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

export const toDoubleDigit = (num = 0) => num.toString().padStart(2, '0')

/**
 * Formats a duration object into a human-readable string.
 * Returns localized date if duration >= 1 day, otherwise returns formatted time (e.g., "2h 30m", "45m", "30s").
 * 
 * @param {Object} [duration={}] - Duration with days, hours, minutes, seconds
 * @param {Date|string|number} endedAt - End date/time for durations >= 1 day
 * @returns {string} Formatted duration or date string
 */
export const formatDuration = (duration = {}, endedAt) => {
    // If duration days is more than 1 show only the date
    if (duration.days && duration.days >= 1) {
        return format(new Date(endedAt), 'LLL d')
    }

    // Format duration string
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
    if (!duration.minutes && duration.seconds > 0) {
        result += `${duration.seconds}s`
    }

    return result || '0s'
}

/**
 * Simplify unit diplay label
 */
export const shortUnit = (unit) => {
    return flOzRegex.test(unit) ? 'oz' : unit
}

/**
 * Capitalize the first letter of the given string
 * @param {string} string
 * @returns
 */
export const capitalize = (string) => {
    if (typeof string !== 'string') return string
    return string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : ''
}
/**
 * Generate an array of number from a range with a given step
 * @param {number} min range start
 * @param {number} max range end
 * @param {number} step
 * @returns {number[]}
 */
export const generateArrayFromRange = (min = 0, max = 1, step = 1) => {
    if (max < min) {
        throw new RangeError('min must be less than max')
    }

    const array = []

    for (let i = min; i <= max; i += step) {
        array.push(i)
    }

    return array
}
