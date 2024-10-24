import { intervalToDuration } from 'date-fns'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { toDoubleDigit } from '@/utils/tools'

let INTERVAL = null

const SleepingForm = () => {
    const [task, setTask] = useState(
        localStorage.getItem('inProgressTask') || {
            startedAt: new Date().toISOString(),
            endedAt: new Date().toISOString()
        }
    )
    const [status, setStatus] = useState('stopped')
    const [timeCounter, setTimeCounter] = useState(0)

    const startTimer = () => {
        if (status === 'stopped') setTask({ ...task, startedAt: new Date().toISOString() })
        setStatus('started')
    }

    const pauseTimer = () => {
        setStatus('paused')
        clearInterval(INTERVAL)
    }

    const stopTimer = () => {
        setStatus('stopped')
        clearInterval(INTERVAL)
        setTimeCounter(0)
    }

    const toggleTimer = () => {
        if (status === 'started') {
            pauseTimer()
        } else {
            startTimer()
        }
    }

    useEffect(() => {
        if (!task) return

        if (status === 'stopped') {
            clearInterval(INTERVAL)
            return
        }

        if (status === 'paused') {
            clearInterval(INTERVAL)
            return
        }

        INTERVAL = setInterval(() => {
            setTimeCounter((prev) => prev + 1)
        }, 1000)

        return () => {
            clearInterval(INTERVAL)
        }
    }, [timeCounter, status, task])

    const displayTimer = () => {
        const duration = intervalToDuration({ start: 0, end: timeCounter * 1000 })
        const h = toDoubleDigit(duration.hours)
        const m = toDoubleDigit(duration.minutes)
        const s = toDoubleDigit(duration.seconds)
        return `${h}:${m}:${s}`
    }

    return (
        <div className={styles.container}>
            <p className={styles.timer}>{displayTimer()}</p>
            <div className="d-flex flex-gap-1">
                <button onClick={toggleTimer}>{status === 'started' ? 'Pause' : 'Start'}</button>
                <button
                    disabled={status === 'stopped'}
                    className="outline contrast"
                    onClick={stopTimer}
                >
                    Stop
                </button>
            </div>
        </div>
    )
}

export default SleepingForm
