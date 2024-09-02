import { useEffect, useState } from 'react'
import TaskCard from '@/components/common/task-card'
import { getHistory } from '@/controllers/history'
import classNames from 'classnames'
import styles from './styles.module.scss'

const HistoryView = () => {
    const [history, setHistory] = useState([])

    useEffect(() => {
        const loadTasks = async () => {
            const history = await getHistory()
            if (history) {
                setHistory(history)
            }
        }

        loadTasks()
    }, [])

    return (
        <div className="page container">
            <h3>History</h3>

            <ul className={classNames("d-flex flex-column flex-gap-2", styles.taskList)}>
                {history.map((task) => (
                    <li key={`task-${task.id}`}>
                        <TaskCard task={task} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HistoryView
