import { useState, useCallback } from 'react'

export function useClipboard(resetDelay = 1500) {
    const [copied, setCopied] = useState(false)

    const copy = useCallback((text) => {
        if (!navigator.clipboard) return
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), resetDelay)
        })
    }, [resetDelay])

    return { copied, copy }
}