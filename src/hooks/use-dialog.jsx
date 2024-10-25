import { DialogContext } from '@/context/dialog-provider'
import { useContext } from 'react'

const useDialog = () => {
    const { setIsOpen, setConfig } = useContext(DialogContext)

    /**
     * Open a new dialog
     * @param {import('@/context/dialog-provider').DialogConfig} config
     */
    const openDialog = (config) => {
        setIsOpen(true)
        setConfig(config)
    }

    const closeDialog = () => {
        setIsOpen(false)
        setConfig({})
    }

    return { openDialog, closeDialog }
}

export default useDialog
