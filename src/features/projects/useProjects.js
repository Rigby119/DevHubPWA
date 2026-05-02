import { useCallback } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'

export function useProjects() {
    const [projects, setProjects] = useLocalStorage('dh_projects', [])

    const addProject = useCallback((project) => {
        setProjects((prev) => [...prev, { ...project, id: crypto.randomUUID() }])
    }, [setProjects])

    const removeProject = useCallback((id) => {
        setProjects((prev) => prev.filter((p) => p.id !== id))
    }, [setProjects])

    return { projects, addProject, removeProject }
}