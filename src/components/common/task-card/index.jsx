import PropTypes from 'prop-types'
import Card from '../card'
import { IconBabyBottle, IconCalendar, IconDiaper, IconStopwatch, IconSubtask, IconZzz } from '@tabler/icons-react'
import { format, parseISO, intervalToDuration } from 'date-fns'
import styles from './styles.module.scss'
import classNames from 'classnames'

const TaskCard = ({ task }) => {
    const renderIcon = () => {
        switch (task.type) {
            case 'diaper':
                return <IconDiaper />
            case 'sleeping':
                return <IconZzz />
            case 'feeding':
                return <IconBabyBottle />
            default:
                return <IconSubtask />
        }
    }

    const duration = intervalToDuration({
        start: parseISO(task.endedAt),
        end: new Date()
    })

    return (
        <Card className={styles.container}>
            <div className={classNames(styles.iconContainer, task.type)}>
                <div className="icon">{renderIcon()}</div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentDetails}>
                    <div className={styles.label}>{task.label}</div>

                    <div className={styles.taskDate}>
                        <IconCalendar width={14} />
                        {format(parseISO(task.startedAt), 'hh:mm aaa LLL d')}
                    </div>
                </div>
                <div className={styles.time}>
                    <IconStopwatch width={16} />
                    {duration.hours}h {duration.minutes}m
                </div>
            </div>
        </Card>
    )
}

TaskCard.propTypes = {
    task: PropTypes.shape({
        type: PropTypes.string,
        label: PropTypes.string,
        startedAt: PropTypes.string,
        endedAt: PropTypes.string
    }).isRequired
}

export default TaskCard
