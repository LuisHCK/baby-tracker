import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { useMemo } from 'react'
import { capitalize, shortUnit } from '@/utils/tools'
import classNames from 'classnames'
import { TASK_TYPES } from '@/lib/constansts'
import { durationFormat } from '@/utils/time'
import { parseISO } from 'date-fns'

const Details = ({ task = {} }) => {
    const label = useMemo(() => {
        switch (task.type) {
            case TASK_TYPES.DIAPER:
                return `${capitalize(task.state)}${
                    task.moreDetails !== 'none' ? ` (${task.moreDetails})` : ''
                }`
            case TASK_TYPES.SLEEPING:
                return durationFormat(parseISO(task.startedAt), parseISO(task.endedAt))
            case TASK_TYPES.FEEDING:
                return `${task.milk} ${shortUnit(task.unit)}${
                    task.source ? ` (${task.source})` : ''
                }`
            default:
                return ''
        }
    }, [task])

    return (
        <div className={classNames(styles.subHeading, 'd-flex')}>
            <div className={styles.value}>{label}</div>
        </div>
    )
}

Details.propTypes = {
    task: PropTypes.object
}

export default Details
