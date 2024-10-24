import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getSettings } from '@/controllers/settings'

const initialState = {}

export const AppContext = createContext(initialState)

export const AppContenxtProvider = ({ children }) => {
    const [babyInfo, setBabyInfo] = useState({})
    const [availableTasks, setAvailableTasks] = useState([])
    const [currentTask, setCurrentTask] = useState(null)
    const [settings, setSettings] = useState({})
    const [units, setUnits] = useState({})
    const [sleepTimer, setSleepTimer] = useState(null)

    useEffect(() => {
        getSettings('babyInfo').then((res) => res && setBabyInfo(res.value))
        getSettings('units').then((res) => res && setUnits(res.value))
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
        setSleepTimer
    }

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

AppContenxtProvider.propTypes = {
    children: PropTypes.node
}
