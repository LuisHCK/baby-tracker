import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import IconArrowLeft from '@tabler/icons-react/dist/esm/icons/IconArrowLeft'
import { useLocation } from 'wouter'
import { useTranslation } from 'react-i18next'

const PageLayout = ({ children, title, redirectToHome = false }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, navigate] = useLocation()
    const { t } = useTranslation()

    const goBack = () => {
        if (redirectToHome) {
            navigate('~/app')
        } else {
            window.history.back()
        }
    }

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <button className={styles.backButton} onClick={goBack}>
                    <IconArrowLeft />
                </button>
                <h1 className={styles.title}>{title || t('layouts.page_layout.title')}</h1>
            </header>
            <div className="page-container pt-4">
                {children}
            </div>
        </article>
    )
}

PageLayout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    redirectToHome: PropTypes.bool
}

export default PageLayout
