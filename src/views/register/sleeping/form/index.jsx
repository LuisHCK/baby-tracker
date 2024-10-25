import styles from './styles.module.scss'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/app'
import { durationFormat } from '@/utils/time'

let INTERVAL = null

const SleepingForm = () => {
    const { sleepTimer, setSleepTimer } = useContext(AppContext)
    const [timeCounter, setTimeCounter] = useState('00h:00m:00s')

    const startTimer = () => {
        const startTime = new Date()
        localStorage.setItem('sleepTimer', startTime.toISOString())
        setSleepTimer(startTime)
    }

    const stopTimer = () => {
        if (confirm('Are you sure you want to stop the sleep timer?')) {
            setSleepTimer(null)
        }
    }

    const toggleTimer = () => {
        if (sleepTimer) {
            stopTimer()
        } else {
            startTimer()
        }
    }

    useEffect(() => {
        if (!sleepTimer) return

        INTERVAL = setInterval(() => {
            setTimeCounter(durationFormat(sleepTimer, new Date()))
        }, 1000)

        return () => {
            clearInterval(INTERVAL)
        }
    }, [sleepTimer])

    return (
        <div className={styles.container}>
            <p className={styles.timer}>{timeCounter}</p>
            <div className="d-flex w-100">
                <button className="w-100 secondary" onClick={toggleTimer}>
                    {sleepTimer ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    )
}

export default SleepingForm
