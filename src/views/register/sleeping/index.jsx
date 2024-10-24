import { getHistoryByType } from '@/controllers/history'
import { Fragment, useEffect, useState } from 'react'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import SleepingForm from './form'
import StickyBottomButton from '@/components/sticky-bottom-button'
import TaskList from '@/components/task-list'

const SleepingView = () => {
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev)
    }

    const getHistory = async () => {
        setIsLoading(true)
        const res = await getHistoryByType('sleeping')
        setIsLoading(false)

        if (res) {
            setHistory(res)
        }
    }

    const handleFormSubmit = async () => {
        await getHistory()
        setIsModalOpen(false)
    }

    useEffect(() => {
        getHistory()
    }, [])

    return (
        <Fragment>
            <div>
                <TaskList tasks={history} />

                {!isLoading && !history.length && <NoResults />}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={toggleModal}
                title="Start sleep timer"
                cancelLabel="Hide"
                hideConfirm
            >
                <SleepingForm onSubmit={handleFormSubmit} />
            </Modal>

            <StickyBottomButton label="Start sleep timer" onClick={toggleModal} />
        </Fragment>
    )
}

export default SleepingView
