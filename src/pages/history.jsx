import HistoryView from '@/views/history'
import AuthRequired from '../router/auth-required'
import PageLayout from '@/layouts/page-layout'

const HistoryPage = () => {
    return (
        <AuthRequired>
            <PageLayout title="History">
                <HistoryView />
            </PageLayout>
        </AuthRequired>
    )
}

export default HistoryPage
