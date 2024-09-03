import { UserProfile } from '@clerk/clerk-react'

const ProfilePage = () => {
    return (
        <div className="page">
            <UserProfile path="/app/profile" />
        </div>
    )
}

export default ProfilePage
