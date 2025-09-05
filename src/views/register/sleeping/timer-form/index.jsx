import styles from './styles.module.scss'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/app'
import { durationFormat } from '@/utils/time'
import { useTranslation } from 'react-i18next'

let INTERVAL = null

const SleepingForm = () => {
    const { t } = useTranslation()
    const { sleepTimer, setSleepTimer } = useContext(AppContext)
    const [timeCounter, setTimeCounter] = useState('00h:00m:00s')

    const startTimer = () => {
        const startTime = new Date()
        localStorage.setItem('sleepTimer', startTime.toISOString())
        setSleepTimer(startTime)
    }

    const stopTimer = () => {
        if (confirm(t('sleep.stopTimerConfirm'))) {
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
                    {sleepTimer ? t('form.stop') : t('form.start')}
                </button>
            </div>
        </div>
    )
}

export default SleepingForm
