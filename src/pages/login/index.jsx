import styles from './styles.module.scss'
import { createAnonymousUser } from '@/controllers/users'
import { useLocation } from 'wouter'
import { useTranslation } from 'react-i18next'

const LoginPage = () => {
    const { t } = useTranslation()
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
            <div className={styles.footer}>
                <p>
                    <button onClick={handleAnonymousLogin}>{t('login.proceedWithoutAccount')}</button>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
