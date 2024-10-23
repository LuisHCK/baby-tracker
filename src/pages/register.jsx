import PageLayout from '@/layouts/page-layout'
import AuthRequired from '@/router/auth-required'
import DiaperView from '@/views/register/diaper'
import FeedView from '@/views/register/feed'
import SleepingView from '@/views/register/sleeping'
import { useMemo } from 'react'
import { useLocation } from 'wouter'

const RegisterPage = () => {
    const [location] = useLocation()

    const currentView = useMemo(() => {
        switch (location) {
            case '/register/feed':
                return { title: 'Feeding', view: <FeedView /> }
            case '/register/diaper':
                return { title: 'Diaper', view: <DiaperView /> }
            case '/register/sleeping':
                return { title: 'Sleeping', view: <SleepingView /> }

            default:
                return { title: 'Register', view: <div>Register Page</div> }
        }
    }, [location])

    return (
        <AuthRequired>
            <PageLayout title={currentView.title}>{currentView.view}</PageLayout>
        </AuthRequired>
    )
}

export default RegisterPage
