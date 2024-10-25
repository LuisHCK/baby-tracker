import { intervalToDuration } from 'date-fns'
import { toDoubleDigit } from './tools'

export const durationFormat = (start, end) => {
    const duration = intervalToDuration({ start, end })
    const h = toDoubleDigit(duration.hours)
    const m = toDoubleDigit(duration.minutes)
    const s = toDoubleDigit(duration.seconds)
    return `${h}h ${m}m ${s}s`
}

export const isDate = (date) => {
    return date instanceof Date && !isNaN(date)
}
