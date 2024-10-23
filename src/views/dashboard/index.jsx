import { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Link } from 'wouter'
import TaskCard from '@/components/common/task-card'
import Actions from '@/components/dashboard/actions'
import BabyProfile from '@/components/dashboard/baby-profile'
import InProgress from '@/components/dashboard/in-progress'
import { getLatestHistory } from '@/controllers/history'
import styles from './styles.module.scss'

const DashboardView = () => {
    const [latestHistory, setLatestHistory] = useState([])
    const [tasksInProgress, setTasksInProgress] = useState([])

    useEffect(() => {
        const loadHistory = async () => {
            const history = await getLatestHistory()
            if (history) {
                setLatestHistory(history)
            }
        }
        loadHistory()
    }, [])

    return (
        <div className="page mt-0">
            <div className={classNames('container', styles.header)}>
                <BabyProfile />
            </div>

            <div className={classNames('container', styles.content)}>
                <Actions />

                {tasksInProgress.length > 0 && (
                    <Fragment>
                        <h3 className={styles.sectionTitle}>In progress</h3>
                        {/* <InProgress task={task} /> */}
                    </Fragment>
                )}

                <h3 className={styles.sectionTitle}>History</h3>
                {latestHistory.map((task) => (
                    <TaskCard task={task} key={`task-id-${task.id}`} />
                ))}
                <div className="flex-center">
                    <Link href="/history">View full history</Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardView
