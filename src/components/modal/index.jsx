import PropTypes from 'prop-types'

const Modal = ({
    children,
    onClose = () => {},
    onConfirm = () => {},
    isOpen = false,
    hideConfirm = false,
    title = ''
}) => {
    const handleClose = () => {
        if (typeof onClose === 'function') {
            onClose()
        }
    }

    return (
        <dialog open={isOpen}>
            <article>
                <header>
                    <button onClick={handleClose} aria-label="Close" rel="prev"></button>
                    <p>
                        <strong>{title}</strong>
                    </p>
                </header>
                {children}
                <footer>
                    <button onClick={handleClose} className="secondary">
                        Cancel
                    </button>
                    {!hideConfirm && <button onClick={onConfirm}>Confirm</button>}
                </footer>
            </article>
        </dialog>
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    hideConfirm: PropTypes.bool
}

export default Modal
