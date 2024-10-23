import database from '@/database'
const InProgress = database.table('inProgress')

export const startInProgressTask = async (data) => {
    try {
        const task = await InProgress.add({ ...data, createdAt: new Date().toISOString() })
        return await InProgress.get(task)
    } catch (error) {
        console.error(error)
        return null
    }
}

export const getAllInProgressTasks = async () => {
    try {
        const tasks = await InProgress.orderBy('createdAt').limit(10).reverse().toArray()
        return tasks
    } catch (error) {
        console.error(error)
        return null
    }
}

export const getInProgressTask = async (id) => {
    try {
        const task = await InProgress.get(id)
        return task
    } catch (error) {
        console.error(error)
        return null
    }
}

export const updateInProgressTask = async (id, data) => {
    try {
        await InProgress.update(id, data)
        return InProgress.get(id)
    } catch (error) {
        console.error(error)
        return null
    }
}
