import { useRef } from 'react'
import CardHeader from '@components/molecules/CardHeader'
import LinkItem from '@components/molecules/LinkItem'
import Modal from '@components/molecules/Modal'
import FormField from '@components/molecules/FormField'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import Select from '@components/atoms/Select'
import EmptyState from '@components/atoms/EmptyState'
import { useLinks } from '@features/links/useLinks'
import { useModal } from '@hooks/useModal'

const MODAL_ID = 'add-link'

export default function WorkLinksPanel({ onToast }) {
    const { links, addLink, removeLink } = useLinks()
    const { isOpen, open, close } = useModal()

    const nameRef = useRef()
    const urlRef = useRef()
    const iconRef = useRef()
    const catRef = useRef()

    function handleSave() {
        const name = nameRef.current.value.trim()
        const url = urlRef.current.value.trim()
        if (!name || !url) return
        addLink({
            name,
            url,
            icon: iconRef.current.value.trim() || '🔗',
            cat: catRef.current.value,
        })
            ;[nameRef, urlRef, iconRef].forEach(r => { r.current.value = '' })
        close()
        onToast('Link guardado')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSave()
    }

    return (
        <>
            <div className="bg-bg2 border border-border rounded-xl p-5 hover:border-border2 transition-colors duration-200">
                <CardHeader title="Links de trabajo" dotColor="bg-amber">
                    <Button variant="default" onClick={() => open(MODAL_ID)}>+ añadir</Button>
                </CardHeader>

                {links.length === 0 ? (
                    <EmptyState message="Agrega tus links de ventas." />
                ) : (
                    <div className="flex flex-col gap-2">
                        {links.map(l => (
                            <LinkItem key={l.id} link={l} onRemove={removeLink} />
                        ))}
                    </div>
                )}
            </div>

            <Modal isOpen={isOpen(MODAL_ID)} onClose={close} title="+ Nuevo link">
                <div onKeyDown={handleKeyDown}>
                    <FormField label="Nombre">
                        <Input ref={nameRef} placeholder="Portal de precios" />
                    </FormField>
                    <FormField label="URL">
                        <Input ref={urlRef} placeholder="https://..." />
                    </FormField>
                    <FormField label="Emoji / Icono">
                        <Input ref={iconRef} placeholder="💼" maxLength={2} />
                    </FormField>
                    <FormField label="Categoría">
                        <Select ref={catRef} defaultValue="work">
                            <option value="work">Trabajo</option>
                            <option value="dev">Dev</option>
                            <option value="docs">Docs</option>
                            <option value="other">Otro</option>
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