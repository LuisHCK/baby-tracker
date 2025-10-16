import { getHistoryByType } from '@/controllers/history'
import { Fragment, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import styles from './styles.module.scss'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import FeedForm from './form'
import StickyBottomButton from '@/components/sticky-bottom-button'
import TaskList from '@/components/task-list'
import Tabs from '@/components/common/tabs'
import { TASK_TYPES } from '@/lib/constansts'
import LineChart from '@/components/charts/line-chart'
import { format, parseISO } from 'date-fns'
import { AppContext } from '@/context/app'

const FeedView = () => {
    const { currentBaby } = useContext(AppContext)
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedModalIsOpen, setFeedModalIsOpen] = useState(false)

    const toggleFeedModal = () => {
        setFeedModalIsOpen((prev) => !prev)
    }

    const getHistory = useCallback(async () => {
        setIsLoading(true)
        const res = await getHistoryByType({ type: TASK_TYPES.FEEDING, babyId: currentBaby?.id })
        setIsLoading(false)

        if (Array.isArray(res)) {
            setHistory(res.sort((a, b) => parseISO(b.endedAt) - parseISO(a.endedAt)))
        }
    }, [currentBaby])

    const handleFormSubmit = async () => {
        await getHistory()
        setFeedModalIsOpen(false)
    }

    const parseTaskDate = useCallback((date = '') => {
        try {
            return format(parseISO(date), 'h:mbb')
        } catch (error) {
            console.log(`Error parsing date: ${error}`)
        }
        return ''
    }, [])

    const chartData = useMemo(() => {
        const reversedHistory = history.slice().reverse()

        return {
            labels: reversedHistory.map((item) => parseTaskDate(item.endedAt)),
            series: [reversedHistory.map((item) => item.milk)]
        }
    }, [history, parseTaskDate])

    const historyContent = (
        <div className={styles.feedLayout}>
            <TaskList tasks={history} />
            {!isLoading && !history.length && <NoResults />}
        </div>
    )

    useEffect(() => {
        getHistory()
    }, [getHistory])

    return (
        <Fragment>
            {history.length > 0 ? (
                <div className={styles.tabs}>
                    <Tabs
                        defaultIndex={0}
                        tabs={[
                            { label: 'History', content: historyContent },
                            { label: 'Charts', content: <LineChart data={chartData} /> }
                        ]}
                    />
                </div>
            ) : (
                historyContent
            )}

            <Modal
                isOpen={feedModalIsOpen}
                onClose={toggleFeedModal}
                title="Register new feed"
                hideConfirm
            >
                <FeedForm onSubmit={handleFormSubmit} />
            </Modal>

            <StickyBottomButton label="Register feed" onClick={toggleFeedModal} />
        </Fragment>
    )
}

export default FeedView
