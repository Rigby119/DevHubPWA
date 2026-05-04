import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importar Router
import Splash from "@components/atoms/Splash";
import Dashboard from '@pages/Dashboard';
import Zen from '@pages/Zen'; // Importar tu nueva página

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadApp = async () => {
            await Promise.all([
                fetch("/api/data").catch(() => { }),
                new Promise((resolve) => setTimeout(resolve, 1200))
            ]);
            setLoading(false);
        };
        loadApp();
    }, []);

    return (
        <BrowserRouter>
            <Splash loading={loading} />

            <div className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
                <Routes>
                    {/* Definición de rutas */}
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/zen" element={<Zen />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}