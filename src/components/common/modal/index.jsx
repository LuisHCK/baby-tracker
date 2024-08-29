import PropTypes from 'prop-types'

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    className,
    contentClassName,
    titleClassName
}) => {
    return (
        <dialog className={className} open={isOpen} onClose={onClose}>
            <article>
                {title && <h4 className={titleClassName}>{title}</h4>}
                <div className={contentClassName}>{children}</div>
            </article>
        </dialog>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    titleClassName: PropTypes.string
}

export default Modal
