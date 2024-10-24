import { getHistoryByType } from '@/controllers/history'
import { Fragment, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import FeedForm from './form'
import StickyBottomButton from '@/components/sticky-bottom-button'
import TaskList from '@/components/task-list'

const FeedView = () => {
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedModalIsOpen, setFeedModalIsOpen] = useState(false)

    const toggleFeedModal = () => {
        setFeedModalIsOpen((prev) => !prev)
    }

    const getHistory = async () => {
        setIsLoading(true)
        const res = await getHistoryByType('feeding')
        setIsLoading(false)

        if (res) {
            setHistory(res)
        }
    }

    const handleFormSubmit = async () => {
        await getHistory()
        setFeedModalIsOpen(false)
    }

    useEffect(() => {
        getHistory()
    }, [])

    return (
        <Fragment>
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
