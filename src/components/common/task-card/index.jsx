import PropTypes from 'prop-types'
import Card from '../card'
import {
    IconBabyBottle,
    IconCalendar,
    IconClock,
    IconDiaper,
    IconSubtask,
    IconZzz
} from '@tabler/icons-react'
import { format, parseISO, intervalToDuration } from 'date-fns'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { useMemo } from 'react'
import { formatDuration } from '@/utils/tools'
import Details from './details'
import { TASK_TYPES } from '@/lib/constansts'

const TaskCard = ({ task }) => {
    const taskDetails = useMemo(() => {
        switch (task.type) {
            case TASK_TYPES.DIAPER:
                return {
                    icon: <IconDiaper />,
                    label: 'Diaper',
                    details: <Details task={task} />
                }
            case TASK_TYPES.SLEEPING:
                return { icon: <IconZzz />, label: 'Sleeping', details: <Details task={task} /> }
            case TASK_TYPES.FEEDING:
                return {
                    icon: <IconBabyBottle />,
                    label: 'Feeding',
                    details: <Details task={task} />
                }
            default:
                return { icon: <IconSubtask />, label: '' }
        }
    }, [task])

    const duration = useMemo(() => {
        if (task.endedAt) {
            return intervalToDuration({
                start: parseISO(task.endedAt),
                end: new Date()
            })
        }
    }, [task])

    return (
        <Card className={styles.container}>
            <div className={classNames(styles.iconContainer, task.type)}>
                <div className="icon">{taskDetails?.icon}</div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentDetails}>
                    <div className={styles.label}>{taskDetails?.label}</div>

                    {taskDetails?.details && taskDetails?.details}

                    <div className={styles.taskDate}>
                        <IconCalendar width={14} />
                        {task.endedAt && format(parseISO(task.endedAt), 'hh:mm aaa LLL d')}
                    </div>
                </div>
                {!!duration && (
                    <div className={styles.time}>
                        {formatDuration(duration)} <IconClock width={18} />
                    </div>
                )}
            </div>
        </Card>
    )
}

TaskCard.propTypes = {
    task: PropTypes.shape({
        type: PropTypes.string,
        label: PropTypes.string,
        startedAt: PropTypes.string,
        endedAt: PropTypes.string,
        milk: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        unit: PropTypes.string
    }).isRequired
}

export default TaskCard
