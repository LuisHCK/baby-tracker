import Card from '@/components/common/card'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import IconClock from '@tabler/icons-react/dist/esm/icons/IconClock'
import IconPlayerStopFilled from '@tabler/icons-react/dist/esm/icons/IconPlayerStopFilled'
import IconZzz from '@tabler/icons-react/dist/esm/icons/IconZzz'
import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '@/context/app'
import { durationFormat } from '@/utils/time'
import { addHistory } from '@/controllers/history'
import useDialog from '@/hooks/use-dialog'
import { isDate } from 'date-fns'
import { TASK_TYPES } from '@/lib/constansts'
import { useTranslation } from 'react-i18next'

const InProgress = ({ onSave = () => {} }) => {
    const { sleepTimer, setSleepTimer } = useContext(AppContext)
    const [timeCounter, setTimeCounter] = useState('00s')
    const { openDialog } = useDialog()
    const { t } = useTranslation()
    const intervalId = useRef(null)

    const clearStoredTimer = () => {
        localStorage.removeItem('sleepTimer')
        setSleepTimer(null)
    }

    const saveTask = async () => {
        const newTask = await addHistory({
            type: TASK_TYPES.SLEEPING,
            startedAt: isDate(sleepTimer) ? sleepTimer.toISOString() : sleepTimer,
            endedAt: new Date().toISOString()
        })

        if (newTask) {
            onSave?.(newTask)
            clearStoredTimer()
        }
    }

    const stopTimer = () => {
        openDialog({
            title: t('in_progress.stop_timer_title'),
            description: t('in_progress.stop_timer_description'),
            cancelText: t('in_progress.dont_save'),
            confirmText: t('in_progress.save'),
            onDismiss: () => {
                clearStoredTimer()
            },
            onConfirm: () => {
                saveTask()
            }
        })
    }

    useEffect(() => {
        if (!sleepTimer) {
            return
        }

        intervalId.current = setInterval(() => {
            const val = durationFormat(sleepTimer, new Date())
            setTimeCounter(val)
        }, 1000)

        return () => {
            clearInterval(intervalId.current)
        }
    }, [sleepTimer, intervalId])

    return (
        <Card className={styles.container}>
            <div className={styles.iconContainer}>
                <IconZzz />
            </div>
            <div className={styles.content}>
                <div className={styles.contentDetails}>
                    <div className={styles.label}>{t('in_progress.sleep')}</div>
                    <div className={styles.counter}>
                        <IconClock />
                        <div className={styles.counterLabel}>{timeCounter}</div>
                    </div>
                </div>
                <div className={styles.controls}>
                    <button onClick={stopTimer} className={styles.stopButton}>
                        <IconPlayerStopFilled />
                    </button>
                </div>
            </div>
        </Card>
    )
}

InProgress.propTypes = {
    onSave: PropTypes.func
}

export default InProgress
