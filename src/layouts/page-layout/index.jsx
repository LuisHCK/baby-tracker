import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { IconArrowLeft } from '@tabler/icons-react'

const PageLayout = ({ children, title = 'Baby Tracker' }) => {
    const goBack = () => {
        console.log(window.history)
        window.history.back()
    }

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <button className={styles.backButton} onClick={goBack}>
                    <IconArrowLeft />
                </button>
                <h1 className={styles.title}>{title}</h1>
            </header>
            {children}
        </article>
    )
}

PageLayout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
}

export default PageLayout
