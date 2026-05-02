import { useCallback } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'

export function useLinks() {
    const [links, setLinks] = useLocalStorage('dh_links', [])

    const addLink = useCallback((link) => {
        setLinks((prev) => [...prev, { ...link, id: crypto.randomUUID() }])
    }, [setLinks])

    const removeLink = useCallback((id) => {
        setLinks((prev) => prev.filter((l) => l.id !== id))
    }, [setLinks])

    return { links, addLink, removeLink }
}