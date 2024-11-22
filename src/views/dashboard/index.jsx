import { Fragment, useContext, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Link } from 'wouter'
import TaskCard from '@/components/common/task-card'
import Actions from '@/components/dashboard/actions'
import BabyProfile from '@/components/dashboard/baby-profile'
import { getLatestHistory } from '@/controllers/history'
import styles from './styles.module.scss'
import NoResults from '@/components/no-results'
import { AppContext } from '@/context/app'
import InProgress from '@/components/dashboard/in-progress'

const DashboardView = () => {
    const { sleepTimer } = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(true)
    const [latestHistory, setLatestHistory] = useState([])

    const loadHistory = async () => {
        setIsLoading(true)

        const history = await getLatestHistory()

        if (history) {
            setLatestHistory(history)
        }

        setIsLoading(false)
    }

    useEffect(() => {
        loadHistory()
    }, [])

    const taskHistory = useMemo(() => {
        if (latestHistory.length) {
            return (
                <Fragment>
                    <h3 className={styles.sectionTitle}>History</h3>
                    {latestHistory.map((task) => (
                        <TaskCard task={task} key={`task-id-${task.id}`} />
                    ))}
                    <div className="flex-center">
                        <Link href="/history">View full history</Link>
                    </div>
                </Fragment>
            )
        }

        return !isLoading && <NoResults label="No history found" />
    }, [latestHistory, isLoading])

    const renderInProgress = useMemo(() => {
        if (sleepTimer) {
            return (
                <Fragment>
                    <h3 className={styles.sectionTitle}>In progress</h3>
                    <InProgress onSave={loadHistory} />
                </Fragment>
            )
        }
        return null
    }, [sleepTimer])

    return (
        <div className="page mt-0">
            <div className={classNames('container', styles.header)}>
                <BabyProfile />
            </div>

            <div className={classNames('container', styles.content)}>
                <Actions />
                {renderInProgress}
                {taskHistory}
            </div>
        </div>
    )
}

export default DashboardView
