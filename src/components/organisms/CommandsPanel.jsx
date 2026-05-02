import { useRef } from 'react'
import CardHeader from '@components/molecules/CardHeader'
import CommandItem from '@components/molecules/CommandItem'
import Modal from '@components/molecules/Modal'
import FormField from '@components/molecules/FormField'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import EmptyState from '@components/atoms/EmptyState'
import { useCommands } from '@features/commands/useCommands'
import { useModal } from '@hooks/useModal'

const MODAL_ID = 'add-command'

export default function CommandsPanel({ onToast }) {
    const { commands, addCommand, removeCommand } = useCommands()
    const { isOpen, open, close } = useModal()

    const codeRef = useRef()
    const descRef = useRef()

    function handleSave() {
        const code = codeRef.current.value.trim()
        if (!code) return
        addCommand({ code, desc: descRef.current.value.trim() })
            ;[codeRef, descRef].forEach(r => { r.current.value = '' })
        close()
        onToast('Comando guardado')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSave()
    }

    return (
        <>
            <div className="bg-bg2 border border-border rounded-xl p-5 hover:border-border2 transition-colors duration-200">
                <CardHeader title="Comandos útiles" dotColor="bg-cyan">
                    <Button variant="default" onClick={() => open(MODAL_ID)}>+ añadir</Button>
                </CardHeader>

                {commands.length === 0 ? (
                    <EmptyState message="Guarda comandos que siempre olvidas. Clic para copiar." />
                ) : (
                    <div className="flex flex-col gap-1.5">
                        {commands.map(c => (
                            <CommandItem key={c.id} command={c} onRemove={removeCommand} />
                        ))}
                    </div>
                )}
            </div>

            <Modal isOpen={isOpen(MODAL_ID)} onClose={close} title="+ Nuevo comando">
                <div onKeyDown={handleKeyDown}>
                    <FormField label="Comando">
                        <Input ref={codeRef} placeholder="git log --oneline --graph" />
                    </FormField>
                    <FormField label="Descripción">
                        <Input ref={descRef} placeholder="Ver historial visual del repo" />
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