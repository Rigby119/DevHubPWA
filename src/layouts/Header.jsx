import { useState, useEffect } from 'react'

const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

function getTimeStr(d) {
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

function getDateStr(d) {
    return `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

export default function Header() {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 10_000)
        return () => clearInterval(id)
    }, [])

    return (
        <header className="flex items-end justify-between mb-10 pb-6 border-b border-border">
            <div className="flex flex-col gap-1">
                <h1 className="font-sans text-[22px] font-extrabold tracking-tight text-text leading-none">
                    dev<span className="text-accent2">.</span>hub
                </h1>
                <p className="text-[11px] text-muted tracking-widest uppercase font-mono leading-relaxed">
                    tu espacio de trabajo personal
                </p>
            </div>

            <div className="flex flex-col items-end gap-0.5">
                <span className="font-mono text-[26px] font-semibold text-text leading-none tracking-tight">
                    {getTimeStr(now)}
                </span>
                <span className="text-[11px] text-muted font-mono tracking-wide leading-relaxed">
                    {getDateStr(now)}
                </span>
            </div>
        </header>
    )
}