import { useEffect, useState } from "react";
import Splash from "@components/atoms/Splash";
import Dashboard from '@pages/Dashboard'

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadApp = async () => {
            await Promise.all([
                // 🔹 Simula carga de datos (cámbialo por tu API real)
                fetch("/api/data").catch(() => { }),

                // 🔹 Tiempo mínimo para que el splash no parpadee
                new Promise((resolve) => setTimeout(resolve, 1200))
            ]);

            setLoading(false);
        };

        loadApp();
    }, []);

    return (
        <>
            <Splash loading={loading} />

            <div
                className={`
                    transition-opacity duration-500
                    ${loading ? "opacity-0" : "opacity-100"}
                `}
            >
                <Dashboard />
            </div>
        </>
    );
}