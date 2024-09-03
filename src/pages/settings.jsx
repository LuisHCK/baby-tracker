import AppSettingsForm from '@/components/settings/app-form'
import BabyInfoForm from '@/components/settings/baby-info'

const SettingsPage = () => {
    return (
        <div className="container pt-4">
            <h2>Baby information</h2>
            <BabyInfoForm />

            <h2>App settings</h2>
            <AppSettingsForm />
        </div>
    )
}

export default SettingsPage
