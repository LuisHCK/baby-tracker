import database from '@/database'

export const saveSettings = async (settingKey = '', value = null) => {
    const existingEntry = await database.settings.get({ name: settingKey })

    if (existingEntry) {
        await database.settings.update(existingEntry.id, {
            name: settingKey,
            value
        })
    } else {
        await database.settings.add({
            name: settingKey,
            value
        })
    }

    return await database.settings.get({ name: settingKey })
}

export const getSettings = async (settingKey = '') => {
    const existingEntry = await database.settings.get({ name: settingKey })
    return existingEntry
}
