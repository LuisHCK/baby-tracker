import database from '@/database'

/**
 * Type definitions
 * @typedef {Object} History
 * @property {number} id
 * @property {number} babyId
 * @property {string} type
 * @property {string} label
 * @property {string} startedAt
 * @property {string} endedAt
 * @property {string} createdAt
 */

const History = database.table('history')

export const getHistory = async ({ limit = 10, babyId }) => {
    const history = await History.where({ babyId }).reverse().limit(limit).toArray()
    return history
}

/**
 * Retrieves up to 100 history records of a specific type for a given baby.
 *
 * @async
 * @param {Object} params - The parameters for fetching history.
 * @param {string} params.type - The type of history records to retrieve.
 * @param {string} params.babyId - The ID of the baby whose history is being fetched.
 * @returns {Promise<Array<Object>|null>} A promise that resolves to an array of history records, or null if an error occurs.
 */
export const getHistoryByType = async ({ type, babyId }) => {
    try {
        const history = await History.where({ babyId })
            .limit(100)
            .filter((task) => task.type === type)
            .reverse()
            .toArray()
        return history
    } catch (error) {
        console.error(error)
        return null
    }
}

export const getLatestHistory = async ({ babyId }) => {
    try {
        const history = await History.where({ babyId }).reverse().limit(5).toArray()
        return history
    } catch (error) {
        console.error(error)
        return null
    }
}

/**
 * Register a new task
 * @param {Partial<History>} data
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
