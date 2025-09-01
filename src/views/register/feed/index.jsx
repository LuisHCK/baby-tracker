import { getHistoryByType } from '@/controllers/history'
import { Fragment, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import FeedForm from './form'
import StickyBottomButton from '@/components/sticky-bottom-button'
import TaskList from '@/components/task-list'
import { TASK_TYPES } from '@/lib/constansts'
import LineChart from '@/components/charts/line-chart'
import { format, parseISO } from 'date-fns'

const FeedView = () => {
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedModalIsOpen, setFeedModalIsOpen] = useState(false)

    const toggleFeedModal = () => {
        setFeedModalIsOpen((prev) => !prev)
    }

    const getHistory = async () => {
        setIsLoading(true)
        const res = await getHistoryByType(TASK_TYPES.FEEDING)
        setIsLoading(false)

        if (Array.isArray(res)) {
            setHistory(res.sort((a, b) => parseISO(b.endedAt) - parseISO(a.endedAt)))
        }
    }

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
    }, [])

    return (
        <Fragment>
            <LineChart
                data={{
                    labels: history.reverse().map((item) => parseTaskDate(item.endedAt)),
                    datasets: [
                        {
                            label: 'Feed',
                            data: history.reverse().map((item) => item.milk),
                            borderColor: '#fe6e63',
                            backgroundColor: '#fe6e63',
                            fill: false
                        }
                    ]
                }}
            />

            <div className={styles.feedLayout}>
                <TaskList tasks={history} />

                {!isLoading && !history.length && <NoResults />}
            </div>

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
