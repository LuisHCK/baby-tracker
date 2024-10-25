import { getHistoryByType } from '@/controllers/history'
import { Fragment, useContext, useEffect, useMemo, useState } from 'react'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import SleepingForm from './form'
import StickyBottomButton from '@/components/sticky-bottom-button'
import TaskList from '@/components/task-list'
import { TASK_TYPES } from '@/lib/constansts'
import { AppContext } from '@/context/app'
import InProgress from '@/components/dashboard/in-progress'

const SleepingView = () => {
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { sleepTimer } = useContext(AppContext)

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev)
    }

    const getHistory = async () => {
        setIsLoading(true)
        const res = await getHistoryByType(TASK_TYPES.SLEEPING)
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

    const renderInProgress = useMemo(() => {
        if (sleepTimer) {
            return (
                <div className="mb-4">
                    <h6>In progress</h6>
                    <InProgress onSave={getHistory} />
                </div>
            )
        }
    }, [sleepTimer])

    return (
        <Fragment>
            <div>
                {renderInProgress}

                <TaskList tasks={history} />

                {!isLoading && !history.length && !sleepTimer && <NoResults />}
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
