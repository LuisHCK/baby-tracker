import Dexie from 'dexie'

const database = new Dexie('baby-tracker')

database.version(0.1).stores({
    history: '++id, type, label, startedAt, endedAt, createdAt',
    inProgress: '++id, startedAt, endedAt, createdAt, duration',
    settings: '++id, name, value'
})

database.version(0.2).stores({
    growthRecords: '++id, height, weight, born, date, createdAt',
    milestones: '++id, label, date, createdAt',
    medicalHistory: '++id, label, date, createdAt'
})

export default database
