import AppSettingsForm from '@/components/settings/app-form'
import BabyInfoForm from '@/components/settings/baby-info'
import { Link } from 'wouter'

const SettingsPage = () => {
    return (
        <div className="container pt-4">
            <h2>Baby information</h2>
            <BabyInfoForm />

            <h2>App settings</h2>
            <AppSettingsForm />

            <div className="d-flex">
                <Link type="button" to="/" className="w-100 btn btn-primary">
                    Close
                </Link>
            </div>
        </div>
    )
}

export default SettingsPage
