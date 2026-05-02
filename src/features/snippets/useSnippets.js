import { useCallback } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'

export function useSnippets() {
    const [snippets, setSnippets] = useLocalStorage('dh_snippets', [])

    const addSnippet = useCallback((snippet) => {
        setSnippets((prev) => [...prev, { ...snippet, id: crypto.randomUUID() }])
    }, [setSnippets])

    const removeSnippet = useCallback((id) => {
        setSnippets((prev) => prev.filter((s) => s.id !== id))
    }, [setSnippets])

    return { snippets, addSnippet, removeSnippet }
}