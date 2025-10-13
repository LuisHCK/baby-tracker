import { getHistoryByType } from '@/controllers/history'
import { Fragment, useCallback, useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import FeedForm from './form'
import StickyBottomButton from '@/components/sticky-bottom-button'
import TaskList from '@/components/task-list'
import { TASK_TYPES } from '@/lib/constansts'
import LineChart from '@/components/charts/line-chart'
import { format, parseISO } from 'date-fns'
import classNames from 'classnames'
import { AppContext } from '@/context/app'

const ACTIVE_TAB = {
    HISTORY: 'history',
    CHARTS: 'charts'
}

const FeedView = () => {
    const { currentBaby } = useContext(AppContext)
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedModalIsOpen, setFeedModalIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(ACTIVE_TAB.HISTORY)

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

    const parseTaskDate = (date = '') => {
        try {
            return format(parseISO(date), 'h:mbb')
        } catch (error) {
            console.log(`Error parsing date: ${error}`)
        }
    }

    useEffect(() => {
        getHistory()
    }, [getHistory])

    return (
        <Fragment>
            {/* Tabs */}
            {!!history.length && (
                <div className={styles.tabs}>
                    <button
                        type="button"
                        className={classNames({ secondary: activeTab === ACTIVE_TAB.HISTORY })}
                        onClick={() => setActiveTab(ACTIVE_TAB.HISTORY)}
                    >
                        History
                    </button>
                    <button
                        type="button"
                        className={classNames({ secondary: activeTab === ACTIVE_TAB.CHARTS })}
                        onClick={() => setActiveTab(ACTIVE_TAB.CHARTS)}
                    >
                        Charts
                    </button>
                </div>
            )}

            {/* Tab Content */}
            {activeTab === 'history' && (
                <div className={styles.feedLayout}>
                    <TaskList tasks={history} />
                    {!isLoading && !history.length && <NoResults />}
                </div>
            )}

            {activeTab === 'charts' && (
                <LineChart
                    data={{
                        labels: history
                            .slice()
                            .reverse()
                            .map((item) => parseTaskDate(item.endedAt)),
                        datasets: [
                            {
                                label: 'Feed',
                                data: history
                                    .slice()
                                    .reverse()
                                    .map((item) => item.milk),
                                borderColor: '#fe6e63',
                                backgroundColor: '#fe6e63',
                                fill: false
                            }
                        ]
                    }}
                />
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
