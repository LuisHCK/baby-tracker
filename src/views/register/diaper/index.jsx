import { getHistoryByType } from '@/controllers/history'
import { Fragment, useCallback, useContext, useEffect, useState } from 'react'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import DiaperForm from './form'
import StickyBottomButton from '@/components/sticky-bottom-button'
import TaskList from '@/components/task-list'
import { TASK_TYPES } from '@/lib/constansts'
import { AppContext } from '@/context/app'

const DiaperView = () => {
    const { currentBaby } = useContext(AppContext)
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleModal = () => {
        setModalIsOpen((prev) => !prev)
    }

    const getHistory = useCallback(async () => {
        setIsLoading(true)
        const res = await getHistoryByType({ type: TASK_TYPES.DIAPER, babyId: currentBaby?.id })
        setIsLoading(false)

        if (res) {
            setHistory(res)
        }
    }, [currentBaby])

    const handleSubmit = async () => {
        await getHistory()
        setModalIsOpen(false)
    }

    useEffect(() => {
        getHistory()
    }, [getHistory])

    return (
        <Fragment>
            <div>
                <TaskList tasks={history} />

                {!isLoading && !history.length && <NoResults />}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onClose={toggleModal}
                title="Register new diaper"
                hideConfirm
            >
                {modalIsOpen && <DiaperForm onSubmit={handleSubmit} />}
            </Modal>

            <StickyBottomButton label="Register diaper" onClick={toggleModal} />
        </Fragment>
    )
}

export default DiaperView
