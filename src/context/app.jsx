import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getSettings } from '@/controllers/settings'
import { PHOTO_KEY } from '@/lib/constansts'

const initialState = {
    sleepTimer: localStorage.getItem('sleepTimer') || null,
    photo: window.localStorage.getItem(PHOTO_KEY),
    units: {
        liquidUnit: 'us fl-oz',
        lengthUnit: 'in',
        weightUnit: 'lb'
    }
}

export const AppContext = createContext(initialState)

export const AppContenxtProvider = ({ children }) => {
    const [babyInfo, setBabyInfo] = useState({})
    const [availableTasks, setAvailableTasks] = useState([])
    const [currentTask, setCurrentTask] = useState(null)
    const [settings, setSettings] = useState({})
    const [units, setUnits] = useState(initialState.units)
    const [sleepTimer, setSleepTimer] = useState(initialState.sleepTimer)
    const [taskHistory, setTaskHistory] = useState([])
    const [photo, setPhoto] = useState(initialState.photo)

    useEffect(() => {
        getSettings('babyInfo').then((res) => res && setBabyInfo(res.value))
        getSettings('units').then((res) => res?.value && setUnits(res.value))
    }, [])

    const state = {
        babyInfo,
        setBabyInfo,
        availableTasks,
        setAvailableTasks,
        currentTask,
        setCurrentTask,
        settings,
        setSettings,
        units,
        setUnits,
        sleepTimer,
        setSleepTimer,
        taskHistory,
        setTaskHistory,
        photo,
        setPhoto
    }

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

AppContenxtProvider.propTypes = {
    children: PropTypes.node
}
