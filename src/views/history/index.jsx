import { useContext, useEffect, useState } from 'react'
import { getHistory } from '@/controllers/history'
import TaskList from '@/components/task-list'
import NoResults from '@/components/no-results'
import { AppContext } from '@/context/app'

const HistoryView = () => {
    const { currentBaby } = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(true)
    const [history, setHistory] = useState([])

    useEffect(() => {
        const loadTasks = async () => {
            if (!currentBaby?.id) {
                return
            }
            setIsLoading(true)
            const history = await getHistory({ babyId: currentBaby?.id })
            if (history) {
                setHistory(history)
            }
            setIsLoading(false)
        }

        loadTasks()
    }, [currentBaby])

    return (
        <div>
            <TaskList tasks={history} />

            {!isLoading && !history.length && <NoResults />}
        </div>
    )
}

export default HistoryView
