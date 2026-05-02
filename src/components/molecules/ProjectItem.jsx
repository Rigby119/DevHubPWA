import Tag from '@components/atoms/Tag'
import Button from '@components/atoms/Button'
import { getProjectIcon } from '@components/atoms/iconMaps'

const tagVariants = {
    dev: 'accent',
    work: 'amber',
    personal: 'green',
    study: 'cyan',
}

export default function ProjectItem({ project, onRemove }) {
    const Icon = getProjectIcon(project.icon)

    return (
        <div className="group flex items-center gap-3 px-3 py-2.5 bg-bg3 border border-border rounded-md hover:border-border2 hover:bg-bg4 transition-all duration-150">
            <div className="w-7 h-7 rounded-md bg-accent/12 flex items-center justify-center flex-shrink-0 text-accent2">
                <Icon size={15} strokeWidth={1.75} />
            </div>

            <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-text truncate leading-snug">
                    {project.name}
                </p>
                {project.desc && (
                    <p className="text-[11px] text-muted mt-0.5 leading-snug truncate">
                        {project.desc}
                    </p>
                )}
            </div>

            <div className="flex items-center gap-1.5 flex-shrink-0">
                {project.repo && (
                    <Tag variant="accent" href={project.repo}>repo</Tag>
                )}
                {project.demo && (
                    <Tag variant="green" href={project.demo}>demo</Tag>
                )}
                <Tag variant={tagVariants[project.tag] || 'muted'}>
                    {project.tag || 'dev'}
                </Tag>
                <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onRemove(project.id)}
                    className="opacity-0 group-hover:opacity-100"
                >
                    ✕
                </Button>
            </div>
        </div>
    )
}
