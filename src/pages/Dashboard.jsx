import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import AppLayout from '@layouts/AppLayout'
import Toast from '@components/molecules/Toast'
import Button from '@components/atoms/Button'
import ProjectsPanel from '@components/organisms/ProjectsPanel'
import WorkLinksPanel from '@components/organisms/WorkLinksPanel'
import TasksPanel from '@components/organisms/TasksPanel'
import SnippetsPanel from '@components/organisms/SnippetsPanel'
import CommandsPanel from '@components/organisms/CommandsPanel'
import { LuOrigami } from 'react-icons/lu'

export default function Dashboard() {
    const [toastMsg, setToastMsg] = useState('')
    const navigate = useNavigate()

    const notify = useCallback((msg) => {
        setToastMsg('')
        requestAnimationFrame(() => setToastMsg(msg))
    }, [])

    const handleZenMode = () => {
        navigate('/zen')
    }

    return (
        <AppLayout>
            <Button
                variant='primary'
                onClick={handleZenMode}
                className={`
                    fixed bottom-20 right-10 md:bottom-10 md:right-16
                    z-50 w-40 h-8 md:w-52 md:h-10 text-base md:text-lg
                    rounded-full flex items-center justify-center shadow-lg
                    transition-opacity hover:opacity-80 active:scale-95
                `}
            >
                <LuOrigami size={15} />
                <span>Modo Zen</span>
            </Button>
            <div className="grid grid-cols-3 gap-4">

                {/* Row 1: Proyectos (2 cols) + Links de trabajo (1 col) */}
                <div className="col-span-2">
                    <ProjectsPanel onToast={notify} />
                </div>
                <div className="col-span-1">
                    <WorkLinksPanel onToast={notify} />
                </div>

                {/* Row 2: Tareas (2 cols) + Comandos (1 col) */}
                <div className="col-span-2">
                    <TasksPanel onToast={notify} />
                </div>
                <div className="col-span-1">
                    <CommandsPanel onToast={notify} />
                </div>

                {/* Row 3: Snippets (full width) */}
                <div className="col-span-3">
                    <SnippetsPanel onToast={notify} />
                </div>

            </div>

            <Toast message={toastMsg} />
        </AppLayout>
    )
}