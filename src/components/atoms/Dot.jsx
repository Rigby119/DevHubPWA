export default function Dot({ color = 'bg-accent2' }) {
    return (
        <span className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${color}`} />
    )
}