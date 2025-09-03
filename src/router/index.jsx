import { lazy, Suspense } from 'react'
import { Route, Switch } from 'wouter'
import Navigation from '@/components/navigation'
import FullPageLoader from '@/components/common/fullpage-loader'

const HomePage = lazy(() => import('@/pages/home'))
const LoginPage = lazy(() => import('@/pages/login'))
const DashboardPage = lazy(() => import('@/pages/dashboard'))
const HistoryPage = lazy(() => import('@/pages/history'))
const ProfilePage = lazy(() => import('@/pages/profile'))
const SettingsPage = lazy(() => import('@/pages/settings'))
const RegisterPage = lazy(() => import('@/pages/register'))

export const AppRouter = () => {
    return (
        <Suspense fallback={<FullPageLoader />}>
            <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/login/*?" component={LoginPage} />

                <Route path="/app" nest>
                    <Route path="/" component={DashboardPage} />
                    <Route path="/history" component={HistoryPage} />
                    <Route path="/profile/*?" component={ProfilePage} />
                    <Route path="/settings" component={SettingsPage} />
                    <Route path="/register/*?" component={RegisterPage} />
                    <Navigation />
                </Route>
                {/* default 404 page */}
                <Route>404, Not Found!</Route>
            </Switch>
        </Suspense>
    )
}
