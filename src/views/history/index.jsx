import { useEffect, useState } from 'react'
import { getHistory } from '@/controllers/history'
import TaskList from '@/components/task-list'
import NoResults from '@/components/no-results'

const HistoryView = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [history, setHistory] = useState([])

    useEffect(() => {
        const loadTasks = async () => {
            setIsLoading(true)
            const history = await getHistory()
            if (history) {
                setHistory(history)
            }
            setIsLoading(false)
        }

        loadTasks()
    }, [])

    return (
        <div>
            <TaskList tasks={history} />

            {!isLoading && !history.length && <NoResults />}
        </div>
    )
}

export default HistoryView
