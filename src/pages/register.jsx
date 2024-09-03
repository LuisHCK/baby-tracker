import AuthRequired from '@/router/auth-required'
import FeedView from '@/views/register/feed'
import { useLocation } from 'wouter'

const RegisterPage = () => {
    const [location] = useLocation()

    const renderView = () => {
        if (location === '/register/feed') {
            return <FeedView />
        }

        return <div>Register Page</div>
    }

    return (
        <AuthRequired>
            <div className="container page pt-4">{renderView()}</div>
        </AuthRequired>
    )
}

export default RegisterPage
