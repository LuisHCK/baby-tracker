export const createAnonymousUser = () => {
    try {
        window.localStorage.setItem('userId', 'anonymous')
        return { userId: 'anonymous' }
    } catch (error) {
        console.error(`Error creating anonymous user: ${error}`)
        return null
    }
}
