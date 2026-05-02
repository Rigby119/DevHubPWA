export default function Textarea({ className = '', ...props }) {
    return (
        <textarea
            className={`
        w-full bg-bg3 border border-border2 rounded-md
        text-text font-mono text-[13px] leading-relaxed
        px-3 py-2 outline-none resize-y min-h-[80px]
        focus:border-accent
        transition-colors duration-150
        placeholder:text-muted2
        ${className}
      `}
            {...props}
        />
    )
}