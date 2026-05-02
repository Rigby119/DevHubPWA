import { useCallback } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'

export function useCommands() {
    const [commands, setCommands] = useLocalStorage('dh_commands', [])

    const addCommand = useCallback((command) => {
        setCommands((prev) => [...prev, { ...command, id: crypto.randomUUID() }])
    }, [setCommands])

    const removeCommand = useCallback((id) => {
        setCommands((prev) => prev.filter((c) => c.id !== id))
    }, [setCommands])

    return { commands, addCommand, removeCommand }
}