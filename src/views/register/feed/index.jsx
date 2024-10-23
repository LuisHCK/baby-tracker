import TaskCard from '@/components/common/task-card'
import { getHistoryByType } from '@/controllers/history'
import { Fragment, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import FeedForm from './form'

const FeedView = () => {
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [feedModalIsOpen, setFeedModalIsOpen] = useState(false)

    const toggleFeedModal = () => {
        setFeedModalIsOpen((prev) => !prev)
    }

    useEffect(() => {
        const getHistory = async () => {
            setIsLoading(true)
            const res = await getHistoryByType('feeding')
            setIsLoading(false)

            if (res) {
                setHistory(res)
            }
        }

        getHistory()
    }, [])

    return (
        <Fragment>
            <div className={styles.feedLayout}>
                <ul>
                    {history.map((task) => (
                        <li key={`${task.id}-${task.createdAt}`}>
                            <TaskCard task={task} key={`task-id-${task.id}`} />
                        </li>
                    ))}
                </ul>

                {!isLoading && !history.length && <NoResults />}

                <div className={styles.registerFeed}>
                    <button className="w-100" onClick={toggleFeedModal}>
                        Add feed
                    </button>
                </div>
            </div>

            <Modal
                isOpen={feedModalIsOpen}
                onClose={toggleFeedModal}
                title="Register new feed"
                hideConfirm
            >
                <FeedForm />
            </Modal>
        </Fragment>
    )
}

export default FeedView
