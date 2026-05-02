import { useRef } from 'react'
import CardHeader from '@components/molecules/CardHeader'
import ProjectItem from '@components/molecules/ProjectItem'
import Modal from '@components/molecules/Modal'
import FormField from '@components/molecules/FormField'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import Select from '@components/atoms/Select'
import EmptyState from '@components/atoms/EmptyState'
import { useProjects } from '@features/projects/useProjects'
import { useModal } from '@hooks/useModal'

const MODAL_ID = 'add-project'

export default function ProjectsPanel({ onToast }) {
    const { projects, addProject, removeProject } = useProjects()
    const { isOpen, open, close } = useModal()

    const nameRef = useRef()
    const descRef = useRef()
    const iconRef = useRef()
    const repoRef = useRef()
    const demoRef = useRef()
    const tagRef = useRef()

    function handleSave() {
        const name = nameRef.current.value.trim()
        if (!name) return
        addProject({
            name,
            desc: descRef.current.value.trim(),
            icon: iconRef.current.value.trim() || '📁',
            repo: repoRef.current.value.trim(),
            demo: demoRef.current.value.trim(),
            tag: tagRef.current.value,
        })
            ;[nameRef, descRef, iconRef, repoRef, demoRef].forEach(r => { r.current.value = '' })
        close()
        onToast('Proyecto guardado')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSave()
    }

    return (
        <>
            <div className="bg-bg2 border border-border rounded-xl p-5 hover:border-border2 transition-colors duration-200">
                <CardHeader title="Proyectos" dotColor="bg-accent2">
                    <Button variant="accent" onClick={() => open(MODAL_ID)}>+ nuevo</Button>
                </CardHeader>

                {projects.length === 0 ? (
                    <EmptyState message="Sin proyectos aún. Agrega el primero." />
                ) : (
                    <div className="flex flex-col gap-2">
                        {projects.map(p => (
                            <ProjectItem key={p.id} project={p} onRemove={removeProject} />
                        ))}
                    </div>
                )}
            </div>

            <Modal isOpen={isOpen(MODAL_ID)} onClose={close} title="+ Nuevo proyecto">
                <div onKeyDown={handleKeyDown}>
                    <FormField label="Nombre">
                        <Input ref={nameRef} placeholder="mi-proyecto" />
                    </FormField>
                    <FormField label="Descripción">
                        <Input ref={descRef} placeholder="Breve descripción" />
                    </FormField>
                    <FormField label="Emoji / Icono">
                        <Input ref={iconRef} placeholder="🚀" maxLength={2} />
                    </FormField>
                    <FormField label="URL Repositorio">
                        <Input ref={repoRef} placeholder="https://github.com/..." />
                    </FormField>
                    <FormField label="URL Deploy / Demo (opcional)">
                        <Input ref={demoRef} placeholder="https://..." />
                    </FormField>
                    <FormField label="Etiqueta">
                        <Select ref={tagRef} defaultValue="dev">
                            <option value="dev">Dev</option>
                            <option value="work">Work</option>
                            <option value="personal">Personal</option>
                            <option value="study">Study</option>
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