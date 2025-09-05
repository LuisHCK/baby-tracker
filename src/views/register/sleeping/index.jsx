import { getHistoryByType } from '@/controllers/history'
import { Fragment, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import TimerForm from './timer-form'
import ManualForm from './manual-form'
import StickyBottomButton from '@/components/sticky-bottom-button'
import TaskList from '@/components/task-list'
import { TASK_TYPES } from '@/lib/constansts'
import { AppContext } from '@/context/app'
import InProgress from '@/components/dashboard/in-progress'
import Tabs from '@/components/common/tabs'
import toast from 'react-hot-toast'

const SleepingView = () => {
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { sleepTimer } = useContext(AppContext)

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getHistory = async () => {
        setIsLoading(true)
        const res = await getHistoryByType(TASK_TYPES.SLEEPING)
        setIsLoading(false)

        if (res) {
            setHistory(res)
        }
    }

    const handleFormSubmit = useCallback(async () => {
        await getHistory()
        setIsModalOpen(false)
        toast.success('Sleep logged successfully')
    }, [getHistory])

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

    /**
     * Tabs configuration for the forms (memoized)
     */
    const formTabs = useMemo(
        () => [
            {
                label: 'Manual',
                content: <ManualForm onSubmit={handleFormSubmit} onSave={handleFormSubmit} />
            },
            {
                label: 'Timer',
                content: <TimerForm onSubmit={handleFormSubmit} />
            }
        ],
        [handleFormSubmit]
    )

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
                title="Register sleeping"
                cancelLabel="Hide"
                hideConfirm
            >
                {isModalOpen && <Tabs tabs={formTabs} />}
            </Modal>
            <StickyBottomButton label="Start sleep timer" onClick={toggleModal} />
        </Fragment>
    )
}

export default SleepingView
