import { useState, useCallback } from 'react'
import AppLayout from '@layouts/AppLayout'
import Toast from '@components/molecules/Toast'
import ProjectsPanel from '@components/organisms/ProjectsPanel'
import WorkLinksPanel from '@components/organisms/WorkLinksPanel'
import TasksPanel from '@components/organisms/TasksPanel'
import SnippetsPanel from '@components/organisms/SnippetsPanel'
import CommandsPanel from '@components/organisms/CommandsPanel'

export default function Dashboard() {
    const [toastMsg, setToastMsg] = useState('')

    const notify = useCallback((msg) => {
        setToastMsg('')
        requestAnimationFrame(() => setToastMsg(msg))
    }, [])

    return (
        <AppLayout>
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