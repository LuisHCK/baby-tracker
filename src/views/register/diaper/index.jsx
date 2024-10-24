import { getHistoryByType } from '@/controllers/history'
import { Fragment, useEffect, useState } from 'react'
import NoResults from '@/components/no-results'
import Modal from '@/components/modal'
import DiaperForm from './form'
import StickyBottomButton from '@/components/sticky-bottom-button'
import TaskList from '@/components/task-list'

const DiaperView = () => {
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleModal = () => {
        setModalIsOpen((prev) => !prev)
    }

    const getHistory = async () => {
        setIsLoading(true)
        const res = await getHistoryByType('diaper')
        setIsLoading(false)

        if (res) {
            setHistory(res)
        }
    }

    const handleSubmit = async () => {
        await getHistory()
        setModalIsOpen(false)
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
