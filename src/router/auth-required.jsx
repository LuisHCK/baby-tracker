import FullPageLoader from '@/components/common/fullpage-loader'
import { AppContext } from '@/context/app'
import { isEmpty } from '@/utils/tools'
import PropTypes from 'prop-types'
import { useContext, useEffect } from 'react'
import { useLocation } from 'wouter'

const AuthRequired = ({ children }) => {
    const userId = null // TODO: Replace with actual user ID logic
    const isLoaded = true // TODO: Replace with actual loading state logic
    const { currentBaby } = useContext(AppContext)
    // eslint-disable-next-line no-unused-vars
    const [_, navigate] = useLocation()

    useEffect(() => {
        const anonymousUser = window.localStorage.getItem('userId') === 'anonymous'

        const currentUser = userId || anonymousUser

        if (isLoaded && !currentUser) {
            navigate('~/login')
        }

        if (isLoaded && currentUser && isEmpty(currentBaby)) {
            navigate('/settings')
        }
    }, [isLoaded, userId, currentBaby, navigate])

    if (!isLoaded) {
        return <FullPageLoader />
    }

    return children
}

AuthRequired.propTypes = {
    children: PropTypes.node
}

export default AuthRequired
