import { Fragment, useCallback, useContext, useEffect, useMemo, useState } from 'react'
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
import { useTranslation } from 'react-i18next'

const DashboardView = () => {
    const { t } = useTranslation()
    const { sleepTimer, currentBaby } = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(true)
    const [latestHistory, setLatestHistory] = useState([])

    const loadHistory = useCallback(async () => {
        if (!currentBaby?.id) return

        // Show loading indicator
        setIsLoading(true)
        const history = await getLatestHistory({ babyId: currentBaby.id })

        if (history) {
            setLatestHistory(history)
        }

        setIsLoading(false)
    }, [currentBaby])

    useEffect(() => {
        loadHistory()
    }, [loadHistory])

    const taskHistory = useMemo(() => {
        if (latestHistory.length) {
            return (
                <Fragment>
                    <h3 className={styles.sectionTitle}>{t('dashboard.history')}</h3>
                    {latestHistory.map((task) => (
                        <TaskCard task={task} key={`task-id-${task.id}`} />
                    ))}
                    <div className="flex-center">
                        <Link href="/history">{t('dashboard.viewFullHistory')}</Link>
                    </div>
                </Fragment>
            )
        }

        return !isLoading && <NoResults label={t('dashboard.noHistory')} />
    }, [latestHistory, isLoading, t])

    const renderInProgress = useMemo(() => {
        if (sleepTimer) {
            return (
                <Fragment>
                    <h3 className={styles.sectionTitle}>{t('dashboard.inProgress')}</h3>
                    <InProgress onSave={loadHistory} />
                </Fragment>
            )
        }
        return null
    }, [sleepTimer, t, loadHistory])

    return (
        <div className="mt-0">
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
