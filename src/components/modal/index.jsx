import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Modal = ({
    children,
    onClose = () => {},
    onConfirm = () => {},
    isOpen = false,
    hideConfirm = false,
    title = '',
    cancelLabel = 'Cancel',
    confirmLabel = 'Confirm'
}) => {
    const handleClose = () => {
        if (typeof onClose === 'function') {
            onClose()
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

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
                        {cancelLabel}
                    </button>
                    {!hideConfirm && <button onClick={onConfirm}>{confirmLabel}</button>}
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
    hideConfirm: PropTypes.bool,
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string
}

export default Modal
