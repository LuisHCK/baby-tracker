import Dexie from 'dexie'

const database = new Dexie('baby-tracker')

database.version(0.1).stores({
    history: '++id, type, label, startedAt, endedAt',
    settings: '++id, name, value',
    baby: '++id, name, gender, weight, height, age, birthday, createdAt, updatedAt'
})

export default database
