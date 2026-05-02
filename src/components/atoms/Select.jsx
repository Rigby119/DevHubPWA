export default function Select({ children, className = '', ...props }) {
    return (
        <select
            className={`
        w-full bg-bg3 border border-border2 rounded-md
        text-text font-mono text-[13px] leading-relaxed
        px-3 py-2 outline-none
        focus:border-accent
        transition-colors duration-150
        ${className}
      `}
            {...props}
        >
            {children}
        </select>
    )
}