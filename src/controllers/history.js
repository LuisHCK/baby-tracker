import database from '@/database'

const History = database.table('history')

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
