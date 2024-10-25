import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@/components/dialog'

/**
 * @typedef DialogConfig
 * @property {string} title Title for the dialog
 * @property {string} description Description for the dialog
 * @property {function} onConfirm Executed when the confirm button is clicked
 * @property {function} onDismiss Executed when the dialog is dismissed
 * @property {string} confirmText Text for the confirm button
 * @property {string} cancelText Text for the cancel button
 *
 * @typedef Object
 * @property {boolean} isOpen
 * @property {function} setIsOpen
 * @property {DialogConfig} config
 */
const initialState = {
    isOpen: false,
    setIsOpen: () => {},
    config: {}
}

export const DialogContext = createContext(initialState)

export const DialogProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [config, setConfig] = useState({})

    const onClose = () => setIsOpen(false)

    const state = {
        isOpen,
        setIsOpen,
        config,
        setConfig
    }

    return (
        <DialogContext.Provider value={state}>
            {children}
            <Dialog isOpen={isOpen} onClose={onClose} {...config} />
        </DialogContext.Provider>
    )
}

DialogProvider.propTypes = {
    children: PropTypes.node
}
