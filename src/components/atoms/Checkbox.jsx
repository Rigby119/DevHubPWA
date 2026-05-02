export default function Checkbox({ checked, onChange }) {
    return (
        <button
            type="button"
            onClick={onChange}
            className={`
        w-4 h-4 rounded flex-shrink-0 flex items-center justify-center
        border transition-all duration-150 cursor-pointer text-[10px] font-bold
        ${checked
                    ? 'bg-green2 border-green2 text-bg'
                    : 'bg-transparent border-border2 text-transparent hover:border-accent'
                }
      `}
        >
            ✓
        </button>
    )
}