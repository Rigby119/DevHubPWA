import Button from '@components/atoms/Button'
import { useClipboard } from '@hooks/useClipboard'

export default function CommandItem({ command, onRemove }) {
    const { copied, copy } = useClipboard()

    return (
        <div
            className="group flex items-start gap-3 px-3 py-2.5 bg-bg3 border border-border rounded-md hover:border-border2 hover:bg-bg4 transition-all duration-150 cursor-pointer"
            onClick={() => copy(command.code)}
        >
            <code className="text-[12px] text-cyan bg-cyan/5 border border-cyan/10 px-2 py-1 rounded flex-shrink-0 max-w-[200px] truncate leading-snug">
                {command.code}
            </code>

            <span className="flex-1 text-[12px] text-muted pt-1 leading-snug">
                {copied ? (
                    <span className="text-green">✓ copiado</span>
                ) : (
                    command.desc
                )}
            </span>

            <Button
                variant="danger"
                size="sm"
                onClick={(e) => { e.stopPropagation(); onRemove(command.id) }}
                className="opacity-0 group-hover:opacity-100 flex-shrink-0"
            >
                ✕
            </Button>
        </div>
    )
}