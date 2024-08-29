import { useAuth } from '@clerk/clerk-react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useLocation } from 'wouter'

const AuthRequired = ({ children }) => {
    const { userId, isLoaded } = useAuth()
    // eslint-disable-next-line no-unused-vars
    const [_, navigate] = useLocation()

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/login')
        }
    }, [isLoaded, userId, navigate])

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    return children
}

AuthRequired.propTypes = {
    children: PropTypes.node
}

export default AuthRequired
