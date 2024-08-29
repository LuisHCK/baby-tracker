import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import classNames from 'classnames'

const Card = ({ children, className }) => {
    return <div className={classNames(styles.container, className)}>{children}</div>
}

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Card
