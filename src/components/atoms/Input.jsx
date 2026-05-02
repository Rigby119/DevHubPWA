export default function Input({ className = '', ...props }) {
    return (
        <input
            className={`
        w-full bg-bg3 border border-border2 rounded-md
        text-text font-mono text-[13px] leading-relaxed
        px-3 py-2 outline-none
        focus:border-accent
        transition-colors duration-150
        placeholder:text-muted2
        ${className}
      `}
            {...props}
        />
    )
}