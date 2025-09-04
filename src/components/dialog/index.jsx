import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const Dialog = ({
    isOpen = false,
    onClose = () => {},
    onConfirm = () => {},
    onDismiss = () => {},
    title = '',
    description = '',
    confirmText,
    cancelText
}) => {
    const { t } = useTranslation()
    const handleDismiss = () => {
        onDismiss?.()
        onClose?.()
    }

    const handleConfirm = () => {
        onConfirm?.()
        onClose?.()
    }

    return (
        <dialog open={isOpen}>
            <article>
                <h2>{title}</h2>
                <p>{description}</p>
                <footer>
                    <button className="secondary" onClick={handleDismiss}>
                        {cancelText || t('common.cancel')}
                    </button>
                    <button onClick={handleConfirm}>{confirmText || t('common.ok')}</button>
                </footer>
            </article>
        </dialog>
    )
}

Dialog.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    onDismiss: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    confirmText: PropTypes.string,
    cancelText: PropTypes.string
}

export default Dialog
