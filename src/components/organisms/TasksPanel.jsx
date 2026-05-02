import { useRef } from 'react'
import CardHeader from '@components/molecules/CardHeader'
import TaskItem from '@components/molecules/TaskItem'
import Modal from '@components/molecules/Modal'
import FormField from '@components/molecules/FormField'
import ProgressBar from '@components/atoms/ProgressBar'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import Select from '@components/atoms/Select'
import EmptyState from '@components/atoms/EmptyState'
import { useTasks } from '@features/tasks/useTasks'
import { useModal } from '@hooks/useModal'

const MODAL_ID = 'add-task'

export default function TasksPanel({ onToast }) {
    const { tasks, addTask, toggleTask, removeTask, clearDone, doneCount, progress } = useTasks()
    const { isOpen, open, close } = useModal()

    const nameRef = useRef()
    const priRef = useRef()

    function handleSave() {
        const name = nameRef.current.value.trim()
        if (!name) return
        addTask({ name, pri: priRef.current.value })
        nameRef.current.value = ''
        close()
        onToast('Tarea agregada')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSave()
    }

    return (
        <>
            <div className="bg-bg2 border border-border rounded-xl p-5 hover:border-border2 transition-colors duration-200">
                <CardHeader title="Tareas del día" dotColor="bg-green">
                    <span className="text-[11px] text-muted font-mono">{doneCount}/{tasks.length}</span>
                    <Button variant="default" onClick={() => open(MODAL_ID)}>+ añadir</Button>
                    <Button variant="default" size="sm" onClick={() => { clearDone(); onToast('Completadas eliminadas') }}>
                        ✓ limpiar
                    </Button>
                </CardHeader>

                <ProgressBar value={progress} />

                <div className="flex flex-col gap-1.5 mt-3">
                    {tasks.length === 0 ? (
                        <EmptyState message="Ninguna tarea pendiente. ¡Buen día!" />
                    ) : (
                        tasks.map(t => (
                            <TaskItem key={t.id} task={t} onToggle={toggleTask} onRemove={removeTask} />
                        ))
                    )}
                </div>
            </div>

            <Modal isOpen={isOpen(MODAL_ID)} onClose={close} title="+ Nueva tarea">
                <div onKeyDown={handleKeyDown}>
                    <FormField label="Tarea">
                        <Input ref={nameRef} placeholder="Revisar PR del sprint..." />
                    </FormField>
                    <FormField label="Prioridad">
                        <Select ref={priRef} defaultValue="med">
                            <option value="high">Alta</option>
                            <option value="med">Media</option>
                            <option value="low">Baja</option>
                        </Select>
                    </FormField>
                    <div className="flex justify-end gap-2 mt-5">
                        <Button variant="default" onClick={close}>Cancelar</Button>
                        <Button variant="primary" onClick={handleSave}>Guardar</Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}