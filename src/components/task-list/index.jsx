import classNames from 'classnames'
import styles from './styles.module.scss'
import TaskCard from '@/components/common/task-card'
import PropTypes from 'prop-types'

const TaskList = ({ tasks = [] }) => {
    return (
        <ul className={classNames('d-flex flex-column flex-gap-2', styles.taskList)}>
            {tasks.map((task) => (
                <li key={`task-${task.id}`}>
                    <TaskCard task={task} />
                </li>
            ))}
        </ul>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array
}

export default TaskList
