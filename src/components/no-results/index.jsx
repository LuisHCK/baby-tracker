import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

const NoResults = ({ label }) => {
    const { t } = useTranslation()
    return (
        <div className={styles.container}>
            <img src="/plant.webp" alt={t('no_results.alt')} className={styles.image} />
            <h3 className={styles.label}>{label || t('no_results.label')}</h3>
        </div>
    )
}

NoResults.propTypes = {
    label: PropTypes.string
}

export default NoResults
