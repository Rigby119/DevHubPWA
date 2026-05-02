import { useRef } from 'react'
import CardHeader from '@components/molecules/CardHeader'
import SnippetCard from '@components/molecules/SnippetCard'
import Modal from '@components/molecules/Modal'
import FormField from '@components/molecules/FormField'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import Textarea from '@components/atoms/Textarea'
import EmptyState from '@components/atoms/EmptyState'
import { useSnippets } from '@features/snippets/useSnippets'
import { useModal } from '@hooks/useModal'

const MODAL_ID = 'add-snippet'

export default function SnippetsPanel({ onToast }) {
    const { snippets, addSnippet, removeSnippet } = useSnippets()
    const { isOpen, open, close } = useModal()

    const nameRef = useRef()
    const langRef = useRef()
    const codeRef = useRef()

    function handleSave() {
        const name = nameRef.current.value.trim()
        const code = codeRef.current.value.trim()
        if (!name || !code) return
        addSnippet({ name, lang: langRef.current.value.trim() || 'code', code })
            ;[nameRef, langRef, codeRef].forEach(r => { r.current.value = '' })
        close()
        onToast('Snippet guardado')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSave()
    }

    return (
        <>
            <div className="bg-bg2 border border-border rounded-xl p-5 hover:border-border2 transition-colors duration-200">
                <CardHeader title="Snippets de código" dotColor="bg-cyan">
                    <Button variant="default" onClick={() => open(MODAL_ID)}>+ nuevo</Button>
                </CardHeader>

                {snippets.length === 0 ? (
                    <EmptyState message="Guarda fragmentos de código que reutilizas seguido." />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
                        {snippets.map(s => (
                            <SnippetCard key={s.id} snippet={s} onRemove={removeSnippet} />
                        ))}
                    </div>
                )}
            </div>

            <Modal isOpen={isOpen(MODAL_ID)} onClose={close} title="+ Nuevo snippet">
                <div onKeyDown={handleKeyDown}>
                    <FormField label="Título">
                        <Input ref={nameRef} placeholder="Git stash & pop" />
                    </FormField>
                    <FormField label="Lenguaje / Tipo">
                        <Input ref={langRef} placeholder="bash / js / sql / ..." />
                    </FormField>
                    <FormField label="Código">
                        <Textarea ref={codeRef} placeholder={'git stash\ngit pull\ngit stash pop'} />
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