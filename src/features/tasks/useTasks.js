import { useCallback } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'

export function useTasks() {
    const [tasks, setTasks] = useLocalStorage('dh_tasks', [])

    const addTask = useCallback((task) => {
        setTasks((prev) => [...prev, { ...task, id: crypto.randomUUID(), done: false }])
    }, [setTasks])

    const toggleTask = useCallback((id) => {
        setTasks((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t))
    }, [setTasks])

    const removeTask = useCallback((id) => {
        setTasks((prev) => prev.filter((t) => t.id !== id))
    }, [setTasks])

    const clearDone = useCallback(() => {
        setTasks((prev) => prev.filter((t) => !t.done))
    }, [setTasks])

    const doneCount = tasks.filter((t) => t.done).length
    const progress = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0

    return { tasks, addTask, toggleTask, removeTask, clearDone, doneCount, progress }
}