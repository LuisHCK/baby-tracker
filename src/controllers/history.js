import database from '@/database'

/**
 * Type definitions
 * @typedef {Object} History
 * @property {string} id
 * @property {string} type
 * @property {string} label
 * @property {string} startedAt
 * @property {string} endedAt
 * @property {string} createdAt
 */

const History = database.table('history')

/**
 * Get task history
 * @param {number} limit Maximum number of records to return
 * @returns {Promise<History[]>} Array of history records
 */
export const getHistory = async (limit = 10) => {
    const history = await History.orderBy('createdAt').reverse().limit(limit).toArray()
    return history
}

export const getHistoryByType = async (type) => {
    try {
        const history = await History.limit(100)
            .filter((task) => task.type === type)
            .reverse()
            .toArray()
        return history
    } catch (error) {
        console.error(error)
        return null
    }
}

export const getLatestHistory = async () => {
    try {
        const history = await History.orderBy('createdAt').reverse().limit(5).toArray()
        return history
    } catch (error) {
        console.error(error)
        return null
    }
}

/**
 * Register a new task
 * @param {History} data
 * @returns {Promise<History>}
 */
export const addHistory = async (data) => {
    try {
        const history = await History.add({ ...data, createdAt: new Date().toISOString() })
        return await History.get(history)
    } catch (error) {
        console.error(error)
        return null
    }
}

export const updateHistory = async (id, data) => {
    try {
        await History.update(id, data)
        return History.get(id)
    } catch (error) {
        console.error(error)
        return null
    }
}
