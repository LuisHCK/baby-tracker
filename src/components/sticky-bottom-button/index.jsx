import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const StickyBottomButton = ({ onClick = () => {}, label = '' }) => {
    return (
        <div className={styles.container}>
            <button className="w-100" onClick={onClick}>
                {label}
            </button>
        </div>
    )
}

StickyBottomButton.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string
}

export default StickyBottomButton
