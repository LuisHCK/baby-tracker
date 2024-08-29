import Card from '@/components/common/card'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { IconClock, IconPlayerStopFilled } from '@tabler/icons-react'
import { intervalToDuration, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'

let INTERVAL = null

const InProgress = ({ task }) => {
    const [timeCounter, setTimeCounter] = useState(intervalToDuration({
        start: parseISO(task.startedAt),
        end: parseISO(task.endedAt)
    }))

    const stopTimer = () => {
        clearInterval(INTERVAL)
        task.endedAt = new Date().toISOString()
    }

    useEffect(() => {
        if (task.endedAt) {
            clearInterval(INTERVAL)
            return
        }

        INTERVAL = setInterval(() => {
            const time = intervalToDuration({
                start: parseISO(task.startedAt),
                end: new Date()
            })
            setTimeCounter(time)
        }, 1000)

        return () => {
            clearInterval(INTERVAL)
        }
    }, [task, timeCounter])

    return (
        <Card className={styles.container}>
            <div className={styles.iconContainer}>
                <task.icon />
            </div>
            <div className={styles.content}>
                <div className={styles.contentDetails}>
                    <div className={styles.label}>{task.label}</div>
                    <div className={styles.counter}>
                        <IconClock />
                        <div className={styles.counterLabel}>
                            {timeCounter?.hours? timeCounter.hours + 'h ' : ''}
                            {timeCounter?.minutes? timeCounter.minutes + 'm ' : ''}
                            {timeCounter?.seconds? timeCounter.seconds + 's' : ''}
                        </div>
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
    task: PropTypes.shape({
        icon: PropTypes.any,
        label: PropTypes.string,
        startedAt: PropTypes.string,
        endedAt: PropTypes.string
    }).isRequired
}

export default InProgress
