import { getHistoryByType } from '@/controllers/history'
import { Fragment, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import ManualForm from './manual-form'
import StickyBottomButton from '@/components/sticky-bottom-button'
import TaskList from '@/components/task-list'
import { TASK_TYPES } from '@/lib/constansts'
import { AppContext } from '@/context/app'
import InProgress from '@/components/dashboard/in-progress'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

const SleepingView = () => {
    const { t } = useTranslation()
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { sleepTimer, currentBaby } = useContext(AppContext)

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev)
    }

    const getHistory = useCallback(async () => {
        setIsLoading(true)
        const res = await getHistoryByType({ type: TASK_TYPES.SLEEPING, babyId: currentBaby?.id })
        setIsLoading(false)

        if (res) {
            setHistory(res)
        }
    }, [currentBaby])

    const handleFormSubmit = useCallback(async () => {
        await getHistory()
        setIsModalOpen(false)
        toast.success(t('sleep.loggedSuccessfully'))
    }, [getHistory, t])

    useEffect(() => {
        getHistory()
    }, [getHistory])

    const renderInProgress = useMemo(() => {
        if (sleepTimer) {
            return (
                <div className="mb-4">
                    <h6>{t('sleep.inProgress')}</h6>
                    <InProgress onSave={getHistory} />
                </div>
            )
        }
    }, [getHistory, sleepTimer, t])

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
                title={t('sleep.register')}
                cancelLabel={t('form.cancel')}
                hideConfirm
            >
                {isModalOpen && (
                    <ManualForm onSave={handleFormSubmit} onSubmit={handleFormSubmit} />
                )}
            </Modal>
            <StickyBottomButton label={t('sleep.register')} onClick={toggleModal} />
        </Fragment>
    )
}

export default SleepingView
