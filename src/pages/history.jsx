import HistoryView from '@/views/history'
import AuthRequired from '../router/auth-required'
import PageLayout from '@/layouts/page-layout'
import { useTranslation } from 'react-i18next'

const HistoryPage = () => {
    const { t } = useTranslation()
    return (
        <AuthRequired>
            <PageLayout title={t('history.title')}>
                <HistoryView />
            </PageLayout>
        </AuthRequired>
    )
}

export default HistoryPage
