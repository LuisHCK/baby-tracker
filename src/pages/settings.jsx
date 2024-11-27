import Card from '@/components/common/card'
import AppSettingsForm from '@/components/settings/app-form'
import BabyInfoForm from '@/components/settings/baby-info'
import PageLayout from '@/layouts/page-layout'
import { Link } from 'wouter'

const SettingsPage = () => {
    return (
        <PageLayout title="Settings" redirectToHome>
            <Card>
                <h3>Baby information</h3>
                <BabyInfoForm />
            </Card>

            <Card className="mt-4">
                <h3>App settings</h3>
                <AppSettingsForm />
            </Card>

            <div className="d-flex mt-4">
                <Link type="button" to="/" className="w-100 btn btn-primary">
                    Close
                </Link>
            </div>
        </PageLayout>
    )
}

export default SettingsPage
