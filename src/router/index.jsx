import { Route, Switch } from 'wouter'
import HomePage from '@/pages/home'
import LoginPage from '@/pages/login'
import DashboardPage from '@/pages/dashboard'
import HistoryPage from '@/pages/history'
import ProfilePage from '@/pages/profile'
import SettingsPage from '@/pages/settings'
import RegisterPage from '@/pages/register'
import Navigation from '@/components/navigation'

export const AppRouter = () => {
    return (
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
    )
}
