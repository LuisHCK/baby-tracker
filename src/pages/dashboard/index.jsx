import AuthRequired from '@/router/auth-required'
import DashboardView from '@/views/dashboard'

const DashboardPage = () => {
    return (
        <AuthRequired>
            <DashboardView />
        </AuthRequired>
    )
}

export default DashboardPage
