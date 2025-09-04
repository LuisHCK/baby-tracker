import Card from '@/components/common/card'
import AppSettingsForm from '@/components/settings/app-form'
import BabyInfoForm from '@/components/settings/baby-info'
import LangForm from '@/components/settings/lang-form'
import PageLayout from '@/layouts/page-layout'
import { useTranslation } from 'react-i18next'
import { Link } from 'wouter'

const SettingsPage = () => {
    const { t } = useTranslation()
    return (
        <PageLayout title={t('settings.title')} redirectToHome>
            <Card>
                <h3>{t('settings.babyInfo')}</h3>
                <BabyInfoForm />
            </Card>

            <Card className="mt-4">
                <h3>{t('settings.appSettings')}</h3>
                <AppSettingsForm />
                <LangForm />
            </Card>

            <div className="d-flex mt-4">
                <Link type="button" to="/" className="w-100 btn btn-primary">
                    {t('common.close')}
                </Link>
            </div>
        </PageLayout>
    )
}

export default SettingsPage
