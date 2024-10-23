import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { useMemo } from 'react'
import { capitalize, shortUnit } from '@/utils/tools'
import classNames from 'classnames'

const Details = ({ task = {} }) => {
    const label = useMemo(() => {
        switch (task.type) {
            case 'diaper':
                return capitalize(task.state)
            case 'sleeping':
                return 'Sleeping'
            case 'feeding':
                return `${task.milk} ${shortUnit(task.unit)}`
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
