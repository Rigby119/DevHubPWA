import Button from '@components/atoms/Button'
import { useClipboard } from '@hooks/useClipboard'

export default function SnippetCard({ snippet, onRemove }) {
    const { copied, copy } = useClipboard()

    return (
        <div className="group relative bg-bg3 border border-border rounded-md overflow-hidden hover:border-border2 transition-all duration-150">
            <div className="flex items-center justify-between px-3 py-2 bg-bg4 border-b border-border">
                <span className="text-[12px] font-medium text-text leading-snug">
                    {snippet.name}
                </span>
                <div className="flex items-center gap-1.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded border bg-cyan/8 text-cyan border-cyan/15 font-mono">
                        {snippet.lang || 'code'}
                    </span>
                    <Button
                        variant="default"
                        size="sm"
                        onClick={() => copy(snippet.code)}
                        className="opacity-0 group-hover:opacity-100"
                    >
                        {copied ? '✓ copiado' : 'copiar'}
                    </Button>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onRemove(snippet.id)}
                        className="opacity-0 group-hover:opacity-100"
                    >
                        ✕
                    </Button>
                </div>
            </div>
            <pre className="snippet-code px-3 py-2.5 text-[12px] text-accent3 leading-relaxed">
                {snippet.code}
            </pre>
        </div>
    )
}