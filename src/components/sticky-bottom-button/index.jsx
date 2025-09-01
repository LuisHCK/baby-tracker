import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import classNames from 'classnames'

const StickyBottomButton = ({ onClick = () => {}, label = '' }) => {
    return (
        <div className={styles.container}>
            <button className={classNames("w-100", styles.button)} onClick={onClick}>
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
