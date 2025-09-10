import database from '@/database'

/**
 * Type definitions
 * @typedef {Object} Baby
 * @property {string} id - Unique identifier for the baby
 * @property {string} name - Name of the baby
 * @property {string} gender - Gender of the baby
 * @property {string} photo - Photo url or base64 encoded image data
 * @property {string} birthDate - Date of birth of the baby
 * @property {string} createdAt - Timestamp when the baby was created
 * @property {string} updatedAt - Timestamp when the baby was last updated
 */

const Babies = database.table('babies')

/**
 * Add a new baby
 * @param {Partial<Baby>} data
 * @returns {Promise<Baby | null>}
 */
export const addBaby = async (data) => {
    try {
        const result = await Babies.add({ ...data, createdAt: new Date().toISOString() })
        return Babies.get(result)
    } catch (error) {
        console.error('Failed to save baby', error)
        return null
    }
}

/**
 * Get baby by id
 * @param {number} id
 * @returns {Promise<Baby | null>}
 */
export const getBaby = async (id) => {
    try {
        return Babies.get(id)
    } catch (error) {
        console.error('Failed to get baby', error)
        return null
    }
}

/**
 * List existing babies
 * @returns {Promise<Baby[]>}
 */
export const listBabies = async () => {
    try {
        return Babies.limit(10).toArray()
    } catch (error) {
        console.error('Failed to list babies', error)
        return []
    }
}

/**
 * Update existing baby information
 * @param {number} id
 * @param {Partial<Baby>} data
 * @returns {Promise<Baby | null>}
 */
export const updateBaby = async (id, data) => {
    try {
        await Babies.update(id, { ...data, updatedAt: new Date().toISOString() })
        return Babies.get(id)
    } catch (error) {
        console.error('Failed to update baby', error)
        return null
    }
}

/**
 * Delete existing baby
 * @param {number} id
 * @returns {Promise<boolean>}
 */
export const deleteBaby = async (id) => {
    try {
        await Babies.delete(id)
        return true
    } catch (error) {
        console.error('Failed to delete baby', error)
        return false
    }
}
