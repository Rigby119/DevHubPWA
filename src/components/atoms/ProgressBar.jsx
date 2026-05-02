export default function ProgressBar({ value = 0 }) {
    return (
        <div className="h-[3px] bg-border rounded-full overflow-hidden mt-2">
            <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                    width: `${value}%`,
                    background: 'linear-gradient(90deg, var(--color-accent), var(--color-green))',
                }}
            />
        </div>
    )
}