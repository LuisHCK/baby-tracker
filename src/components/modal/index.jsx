import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

const Modal = ({
    children,
    onClose = () => {},
    onConfirm = () => {},
    isOpen = false,
    hideConfirm = false,
    hideCancel = false,
    hideFooter = false,
    title = '',
    cancelLabel,
    confirmLabel,
    size = 'md'
}) => {
    const { t } = useTranslation()
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

    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div
                className={`${styles.content} ${styles[size]}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.close}
                    onClick={handleClose}
                    aria-label={t('common.close')}
                >
                    ×
                </button>

                {title && (
                    <header className={styles.header}>
                        <h2 className={styles.title}>{title}</h2>
                    </header>
                )}

                <div className={styles.body}>{children}</div>

                {!hideFooter && (
                    <footer className={styles.footer}>
                        {!hideCancel && (
                            <button onClick={handleClose} className="btn-secondary">
                                {cancelLabel || t('common.cancel')}
                            </button>
                        )}
                        {!hideConfirm && (
                            <button onClick={onConfirm} className="btn-secondary">
                                {confirmLabel || t('common.confirm')}
                            </button>
                        )}
                    </footer>
                )}
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    hideConfirm: PropTypes.bool,
    hideCancel: PropTypes.bool,
    hideFooter: PropTypes.bool,
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full'])
}

export default Modal
