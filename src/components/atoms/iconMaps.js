import {
    Folder, Rocket, Settings, FlaskConical, Package,
    Globe, Plug, Smartphone, Bot, BarChart2, Paintbrush, FileText,
    Link, Briefcase, DollarSign, ClipboardList, PieChart,
    Receipt, CalendarDays, MessageCircle, Mail, Building2, Pin,
} from 'lucide-react'

export const PROJECT_ICONS = [
    { value: 'folder', label: 'Carpeta', Icon: Folder },
    { value: 'rocket', label: 'Lanzamiento', Icon: Rocket },
    { value: 'settings', label: 'Config / Tool', Icon: Settings },
    { value: 'flask', label: 'Experimento', Icon: FlaskConical },
    { value: 'package', label: 'Paquete / Librería', Icon: Package },
    { value: 'globe', label: 'Web / Frontend', Icon: Globe },
    { value: 'plug', label: 'API / Backend', Icon: Plug },
    { value: 'smartphone', label: 'Mobile', Icon: Smartphone },
    { value: 'bot', label: 'Bot / Automatización', Icon: Bot },
    { value: 'barchart', label: 'Dashboard / Data', Icon: BarChart2 },
    { value: 'paintbrush', label: 'Diseño / UI', Icon: Paintbrush },
    { value: 'filetext', label: 'Docs / Notes', Icon: FileText },
]

export const LINK_ICONS = [
    { value: 'link', label: 'Link general', Icon: Link },
    { value: 'briefcase', label: 'Trabajo / CRM', Icon: Briefcase },
    { value: 'dollar', label: 'Precios', Icon: DollarSign },
    { value: 'clipboard', label: 'Información / Catálogo', Icon: ClipboardList },
    { value: 'piechart', label: 'Reportes / Métricas', Icon: PieChart },
    { value: 'receipt', label: 'Facturas / Admin', Icon: Receipt },
    { value: 'calendar', label: 'Calendario / Agenda', Icon: CalendarDays },
    { value: 'message', label: 'Chat / Soporte', Icon: MessageCircle },
    { value: 'mail', label: 'Correo / Contacto', Icon: Mail },
    { value: 'building', label: 'Portal empresa', Icon: Building2 },
    { value: 'pin', label: 'Referencia rápida', Icon: Pin },
]

// Lookup: dado un value, devuelve el componente Icon
export function getProjectIcon(value) {
    return (PROJECT_ICONS.find(i => i.value === value) ?? PROJECT_ICONS[0]).Icon
}

export function getLinkIcon(value) {
    return (LINK_ICONS.find(i => i.value === value) ?? LINK_ICONS[0]).Icon
}