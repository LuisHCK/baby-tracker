import Card from '@/components/common/card'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { IconClock, IconPlayerStopFilled, IconZzz } from '@tabler/icons-react'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/app'
import { durationFormat } from '@/utils/time'
import { addHistory } from '@/controllers/history'
import useDialog from '@/hooks/use-dialog'
import { isDate } from 'date-fns'
import { TASK_TYPES } from '@/lib/constansts'

let INTERVAL = null

const InProgress = ({ onSave = () => {} }) => {
    const { sleepTimer, setSleepTimer } = useContext(AppContext)
    const [timeCounter, setTimeCounter] = useState('00s')
    const { openDialog } = useDialog()

    const saveTask = async () => {
        const newTask = await addHistory({
            type: TASK_TYPES.SLEEPING,
            startedAt: isDate(sleepTimer) ? sleepTimer.toISOString() : sleepTimer,
            endedAt: new Date().toISOString()
        })

        if (newTask) {
            onSave?.(newTask)
            localStorage.removeItem('sleepTimer')
        }
    }

    const stopTimer = () => {
        openDialog({
            title: 'Stop sleep timer?',
            description: 'Do you want to record the sleeping time?',
            cancelText: `Don't save`,
            confirmText: 'Save',
            onDismiss: () => {
                setSleepTimer(null)
            },
            onConfirm: () => {
                setSleepTimer(null)
                saveTask()
            }
        })
    }

    useEffect(() => {
        if (!sleepTimer) {
            return
        }

        INTERVAL = setInterval(() => {
            const val = durationFormat(sleepTimer, new Date())
            setTimeCounter(val)
        }, 1000)

        return () => {
            clearInterval(INTERVAL)
        }
    }, [sleepTimer])

    return (
        <Card className={styles.container}>
            <div className={styles.iconContainer}>
                <IconZzz />
            </div>
            <div className={styles.content}>
                <div className={styles.contentDetails}>
                    <div className={styles.label}>Sleep</div>
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
