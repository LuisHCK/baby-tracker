import { SignIn } from '@clerk/clerk-react'
import styles from './styles.module.scss'

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <SignIn path="~/login" fallbackRedirectUrl="/app" />
        </div>
    )
}

export default LoginPage
