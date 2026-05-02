const variants = {
    default: 'border border-border2 text-muted hover:border-accent hover:text-accent2 hover:bg-accent/6',
    accent: 'border border-accent text-accent2 hover:bg-accent/10',
    primary: 'bg-accent text-white hover:bg-accent2 border-transparent',
    danger: 'border border-border2 text-muted hover:border-red hover:text-red hover:bg-red/6',
}

const sizes = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-3 py-1 text-[12px]',
}

export default function Button({
    children,
    onClick,
    variant = 'default',
    size = 'md',
    className = '',
    type = 'button',
    ...props
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
        inline-flex items-center gap-1.5 rounded-md font-mono
        cursor-pointer transition-all duration-150 border
        ${variants[variant]} ${sizes[size]} ${className}
      `}
            {...props}
        >
            {children}
        </button>
    )
}