import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuArrowLeft, LuTerminal, LuBriefcase } from 'react-icons/lu';
import Button from '@components/atoms/Button';

export default function Zen() {
    const navigate = useNavigate();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = time.toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });

    const handleBack = () => {
        navigate('/')
    }

    return (
        /* He quitado el bg-slate-50 para que use el fondo por defecto de tu AppLayout o index.css */
        <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">

            {/* Botón Volver con tu componente Button */}
            <Button
                variant='primary'
                onClick={handleBack}
                className={`
                                fixed bottom-20 right-10 md:bottom-10 md:right-16
                                z-50 w-40 h-8 md:w-52 md:h-10 text-base md:text-lg
                                rounded-full flex items-center justify-center shadow-lg
                                transition-opacity hover:opacity-80 active:scale-95
                            `}
            >
                <LuBriefcase size={15} />
                <span>Volver</span>
            </Button>

            <main className="text-center space-y-8">
                {/* Bloque de Fecha y Hora */}
                <header className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.4em] opacity-40 font-medium">
                        {dateString}
                    </p>
                    <h1 className="text-8xl md:text-9xl font-light tracking-tighter">
                        {timeString}
                    </h1>
                </header>

                {/* Mensaje Agradable */}
                <div className="max-w-md mx-auto py-8">
                    <p className="text-xl md:text-2xl font-light italic opacity-60 leading-relaxed">
                        "En el silencio se encuentra la claridad que el ruido oculta."
                    </p>
                </div>

                {/* Bloque de Código Minimalista (Opcional) */}
                <section className="text-left max-w-sm mx-auto">
                    <div className="bg-current/5 p-8 rounded-3xl font-mono text-sm md:text-base opacity-80 backdrop-blur-sm border border-current/10">
                        <p><span className="opacity-50">const</span> focus = <span className="text-pink-500/80">"deep"</span>;</p>
                        <p><span className="opacity-50">while</span> (isWorking) {'{'}</p>
                        <p className="ml-6">eliminateDistractions();</p>
                        <p className="ml-6 opacity-40">// Solo tú y tu código &lt;3</p>
                        <p>{'}'}</p>
                    </div>
                </section>
            </main>

            {/* Indicador de estado al pie */}
            <footer className="absolute bottom-10 text-[10px] uppercase tracking-[0.2em]">
                Modo Zen Activo
            </footer>
        </div>
    );
}