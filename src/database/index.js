import Dexie from 'dexie'

const database = new Dexie('baby-tracker')

database.version(0.1).stores({
    history: '++id, type, label, startedAt, endedAt, createdAt',
    settings: '++id, name, value'
})

export default database
