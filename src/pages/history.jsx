import AuthRequired from '../router/auth-required'

const HistoryPage = () => {
    return (
        <AuthRequired>
            <div>HistoryPage</div>
        </AuthRequired>
    )
}

export default HistoryPage
