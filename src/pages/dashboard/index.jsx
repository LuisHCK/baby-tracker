import BabyProfile from '@/components/dashboard/baby-profile'
import AuthRequired from '@/router/auth-required'
import classNames from 'classnames'
import styles from './styles.module.scss'
import Actions from '@/components/dashboard/actions'
import InProgress from '@/components/dashboard/in-progress'
import { IconDiaper } from '@tabler/icons-react'
import TaskCard from '@/components/common/task-card'
import { useEffect, useState } from 'react'
import { getLatestHistory } from '@/controllers/history'
// import UseSupabase from '@/hooks/use-supabase'
// import { useEffect } from 'react'

const task = {
    icon: IconDiaper,
    label: 'Daiper',
    startedAt: '2024-08-28T23:19:43.738Z',
    endedAt: '2024-08-28T23:32:00.738Z'
}
const DashboardPage = () => {
    const [latestHistory, setLatestHistory] = useState([])

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
        <AuthRequired>
            <div className="page mt-0">
                <div className={classNames('container', styles.header)}>
                    <BabyProfile />
                </div>

                <div className={classNames('container', styles.content)}>
                    <Actions />

                    <h3 className={styles.sectionTitle}>In progress</h3>
                    <InProgress task={task} />

                    <h3 className={styles.sectionTitle}>History</h3>
                    {latestHistory.map((task) => (
                        <TaskCard task={task} key={`task-id-${task.id}`} />
                    ))}
                </div>
            </div>
        </AuthRequired>
    )
}

export default DashboardPage
