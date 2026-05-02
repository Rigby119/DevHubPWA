import { useEffect, useState } from 'react'

export default function Toast({ message }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!message) return
        setVisible(true)
        const t = setTimeout(() => setVisible(false), 2000)
        return () => clearTimeout(t)
    }, [message])

    return (
        <div className={`
      fixed bottom-8 right-8 z-[100]
      bg-bg3 border border-green2 text-green
      px-4 py-2.5 rounded-md font-mono text-[12px] leading-relaxed
      pointer-events-none transition-all duration-200
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
    `}>
            {message}
        </div>
    )
}