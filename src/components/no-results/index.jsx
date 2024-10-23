import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const NoResults = ({ label = 'No results found' }) => {
    return (
        <div className={styles.container}>
            <img src="/plant.webp" alt="No results" className={styles.image} />
            <h3 className={styles.label}>{label}</h3>
        </div>
    )
}

NoResults.propTypes = {
    label: PropTypes.string
}

export default NoResults
