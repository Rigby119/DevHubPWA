import Button from '@components/atoms/Button'
import { getLinkIcon } from '@components/atoms/iconMaps'

export default function LinkItem({ link, onRemove }) {
    const Icon = getLinkIcon(link.icon)

    return (
        <div
            className="group flex items-center gap-3 px-3 py-2.5 bg-bg3 border border-border rounded-md hover:border-border2 hover:bg-bg4 transition-all duration-150 cursor-pointer"
            onClick={() => window.open(link.url, '_blank')}
        >
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 text-amber">
                <Icon size={15} strokeWidth={1.75} />
            </div>

            <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-text leading-snug">
                    {link.name}
                </p>
                <p className="text-[11px] text-muted truncate leading-snug mt-0.5">
                    {link.url}
                </p>
            </div>

            <span className="text-muted2 text-[13px] group-hover:text-muted transition-colors">↗</span>

            <Button
                variant="danger"
                size="sm"
                onClick={(e) => { e.stopPropagation(); onRemove(link.id) }}
                className="opacity-0 group-hover:opacity-100"
            >
                ✕
            </Button>
        </div>
    )
}