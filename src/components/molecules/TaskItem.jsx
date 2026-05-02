import Checkbox from '@components/atoms/Checkbox'
import Button from '@components/atoms/Button'

const priorityStyles = {
    high: 'bg-red/10 text-red border-red/20',
    med: 'bg-amber/10 text-amber border-amber/20',
    low: 'bg-green/8 text-green border-green/15',
}

const priorityLabels = {
    high: 'alta',
    med: 'media',
    low: 'baja',
}

export default function TaskItem({ task, onToggle, onRemove }) {
    return (
        <div className={`group flex items-center gap-2.5 px-3 py-2 bg-bg3 border border-border rounded-md transition-all duration-150 hover:border-border2 ${task.done ? 'opacity-50' : ''}`}>
            <Checkbox checked={task.done} onChange={() => onToggle(task.id)} />

            <span className={`flex-1 text-[13px] leading-relaxed ${task.done ? 'line-through text-muted' : 'text-text'}`}>
                {task.name}
            </span>

            <span className={`text-[10px] px-1.5 py-0.5 rounded border flex-shrink-0 font-mono ${priorityStyles[task.pri || 'med']}`}>
                {priorityLabels[task.pri || 'med']}
            </span>

            <Button
                variant="danger"
                size="sm"
                onClick={() => onRemove(task.id)}
                className="opacity-0 group-hover:opacity-100"
            >
                ✕
            </Button>
        </div>
    )
}