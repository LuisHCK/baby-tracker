import Dexie from 'dexie'

const database = new Dexie('baby-tracker')

database.version(0.1).stores({
    babies: '++id, name, gender, birthDate',
    history: '++id, babyId, type, label, startedAt, endedAt, createdAt',
    inProgress: '++id, babyId, startedAt, endedAt, createdAt, duration',
    settings: '++id, babyId, name, value',
    growthRecords: '++id, babyId, height, weight, born, date, createdAt',
    milestones: '++id, babyId, label, date, createdAt',
    medicalHistory: '++id, babyId, label, date, createdAt'
})

export default database
