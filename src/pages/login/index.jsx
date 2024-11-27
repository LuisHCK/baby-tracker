import { SignIn } from '@clerk/clerk-react'
import styles from './styles.module.scss'
import { createAnonymousUser } from '@/controllers/users'
import { useLocation } from 'wouter'

const LoginPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [_, navigate] = useLocation()

    const handleAnonymousLogin = () => {
        const user = createAnonymousUser()
        if (user) {
            navigate('/app')
        }
    }

    return (
        <div className={styles.container}>
            <SignIn path="~/login" fallbackRedirectUrl="/app" />

            <div className={styles.footer}>
                <p>
                    <button onClick={handleAnonymousLogin}>Proceed without an account</button>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
