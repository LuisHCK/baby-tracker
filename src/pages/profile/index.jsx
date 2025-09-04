import { useTranslation } from 'react-i18next'

const ProfilePage = () => {
    const { t } = useTranslation()
    const userId = null // TODO: Replace with actual user ID logic
    return (
        <div className="page w-100 d-flex flex-center pt-4">
            {userId ? <div>{t('profile.loggedIn')}</div> : <div>{t('profile.signIn')}</div>}
        </div>
    )
}

export default ProfilePage
