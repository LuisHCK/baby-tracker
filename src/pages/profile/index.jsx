const ProfilePage = () => {
    const userId = null // TODO: Replace with actual user ID logic
    return (
        <div className="page w-100 d-flex flex-center pt-4">
            {userId ? <div>Logged in</div> : <div>Sign in</div>}
        </div>
    )
}

export default ProfilePage
