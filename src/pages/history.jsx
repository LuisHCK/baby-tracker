import HistoryView from '@/views/history'
import AuthRequired from '../router/auth-required'

const HistoryPage = () => {
    return (
        <AuthRequired>
            <HistoryView />
        </AuthRequired>
    )
}

export default HistoryPage
