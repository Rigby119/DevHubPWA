import Dot from '@components/atoms/Dot'

export default function CardHeader({ title, dotColor, children }) {
    return (
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
            <span className="flex items-center gap-2 font-sans text-[12px] font-semibold tracking-widest uppercase text-muted">
                <Dot color={dotColor} />
                {title}
            </span>
            <div className="flex items-center gap-2">
                {children}
            </div>
        </div>
    )
}