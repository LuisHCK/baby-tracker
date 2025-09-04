import PageLayout from '@/layouts/page-layout'
import AuthRequired from '@/router/auth-required'
import DiaperView from '@/views/register/diaper'
import FeedView from '@/views/register/feed'
import SleepingView from '@/views/register/sleeping'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'wouter'

const RegisterPage = () => {
    const [location] = useLocation()
    const { t } = useTranslation()

    const currentView = useMemo(() => {
        switch (location) {
            case '/register/feed':
                return { title: t('register.feeding'), view: <FeedView /> }
            case '/register/diaper':
                return { title: t('register.diaper'), view: <DiaperView /> }
            case '/register/sleeping':
                return { title: t('register.sleeping'), view: <SleepingView /> }

            default:
                return { title: t('register.register'), view: <div>Register Page</div> }
        }
    }, [location, t])

    return (
        <AuthRequired>
            <PageLayout title={currentView.title}>{currentView.view}</PageLayout>
        </AuthRequired>
    )
}

export default RegisterPage
