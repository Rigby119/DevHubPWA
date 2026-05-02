import { FaGithub } from 'react-icons/fa'
import { LuSparkles } from "react-icons/lu";

export default function Footer() {
    return (
        <footer className="mt-64 pb-8 flex items-center justify-between border-t border-border pt-6">
            <div className="flex items-center gap-2 text-muted2 font-mono">
                <LuSparkles size={12} className="text-accent2" />
                <span>Diseñado con Claude Sonnet 4.5</span>
            </div>

            <a
                href="https://github.com/Rigby119"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted text-[12px] font-mono hover:text-text transition-colors duration-150 group"
            >
                <FaGithub size={14} className="group-hover:text-accent2 transition-colors duration-150" />
                <span>rigby119</span>
            </a>
        </footer>
    )
}