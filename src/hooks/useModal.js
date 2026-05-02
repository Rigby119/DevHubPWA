import { useState, useCallback, useEffect } from 'react'

export function useModal() {
    const [openId, setOpenId] = useState(null)

    const open = useCallback((id) => setOpenId(id), [])
    const close = useCallback(() => setOpenId(null), [])

    // Close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') close() }
        document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [close])

    const isOpen = (id) => openId === id

    return { openId, open, close, isOpen }
}