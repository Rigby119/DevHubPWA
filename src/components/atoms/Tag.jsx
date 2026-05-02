const variants = {
    accent: 'bg-accent/10 text-accent3 border-accent/20 hover:bg-accent/20',
    green: 'bg-green/8 text-green border-green/20 hover:bg-green/15',
    amber: 'bg-amber/8 text-amber border-amber/20 hover:bg-amber/15',
    cyan: 'bg-cyan/8 text-cyan border-cyan/20 hover:bg-cyan/15',
    muted: 'bg-bg3 text-muted border-border hover:bg-bg4',
}

export default function Tag({ children, variant = 'accent', onClick, href, className = '' }) {
    const cls = `
    inline-flex items-center text-[11px] px-2 py-0.5 rounded
    border font-mono transition-all duration-150 cursor-pointer
    ${variants[variant]} ${className}
  `

    if (href) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={cls}>
                {children}
            </a>
        )
    }

    return (
        <span onClick={onClick} className={cls}>
            {children}
        </span>
    )
}