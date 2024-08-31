import database from '@/database'

export const saveSettings = async (settingKey = '', value = null) => {
    const existingEntry = await database.settings.get({ name: settingKey })

    if (existingEntry) {
        console.log(existingEntry)
        await database.settings.update(existingEntry.id, {
            name: settingKey,
            value
        })
    } else {
        const res = await database.settings.add({
            name: settingKey,
            value
        })
        console.log(res)
    }

    return await database.settings.get({ name: settingKey })
}

export const getSettings = async (settingKey = '') => {
    const existingEntry = await database.settings.get({ name: settingKey })
    return existingEntry
}