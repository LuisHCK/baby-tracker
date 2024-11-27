import { SignIn, useAuth, UserProfile } from '@clerk/clerk-react'

const ProfilePage = () => {
    const { userId } = useAuth()

    return (
        <div className="page w-100 d-flex flex-center pt-4">
            {userId ? (
                <UserProfile path="/app/profile" />
            ) : (
                <SignIn path="/app/profile" fallbackRedirectUrl="/app/profile" />
            )}
        </div>
    )
}

export default ProfilePage
